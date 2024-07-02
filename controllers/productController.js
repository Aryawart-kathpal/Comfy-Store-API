const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const Product = require('../models/Product');

const createProduct = async(req,res)=>{
    const {title,company,featured,price,description,category,image,colors,shipping} = req.body;
    const product = await Product.create({title,company,featured,price,description,category,image,colors,shipping});

    res.status(StatusCodes.CREATED).json({product});
}

//search,category,company,shipping,price,order,featured
const getAllProducts = async(req,res)=>{
    const {search,category,featured,company,shipping,price,order} = req.query;
    
    const categories = ['all','Sofas','Chairs','Tables','Beds','Kids'];
    const companies = ['all','Luxora','Comfora','Modenza','Homestead','Artifex'];

    const queryObject={};
    if(search){
        queryObject.title ={$regex:search,$options:'i'};
    }
    if(category && category !== 'all'){
        // console.log(category);
        queryObject.category = category;
    }
    if(featured){
        queryObject.featured=true;
    }
    if(company && company !== 'all'){
        queryObject.company = company;
        // console.log(queryObject);
    }
    // if(shipping && shipping==='on'){
    //     queryObject.shipping = true;
    // }
    if(shipping && shipping === 'on'){
        queryObject.shipping=true;
    }
    if(price){
        queryObject.price = {$lt:parseInt(price)};
    }

    // if(order==='a-z'){
    //     // console.log("Hello");
    //     result=result.sort('title');
    // }
    // if(order==='z-a'){
    //     result=result.sort('-title');
    // }

    // setting the custom comparator to ignore the case -> is not possible as it is not supported by mongoose, only vanilla js supports that

    // let result =Product.find(queryObject);
    let productCount= await Product.find(queryObject).countDocuments();
    // console.log(productCount);
    let sortOrder={
        lowerTitle:1
    };
    if (order && order === 'a-z') {
        sortOrder.lowerTitle = 1;
    }
    if (order && order === 'z-a') {
        sortOrder.lowerTitle = -1;
    }
    if(order && order==='high'){
        sortOrder.price=-1;
    }
    if(order && order==='low'){
        sortOrder.price=1;
    }
    const page = req.query.page || 1;
    const limit=10;
    const skip=(page-1)*limit;

    const aggregationPipeline =[
        {$match:queryObject},
        {$addFields:{lowerTitle:{$toLower:"$title"}}},
        {$sort:sortOrder||{createdAt:-1}},
        {$skip:skip},
        {$limit:limit},
        {$project:{lowerTitle:0}},
    ];

    const result = await Product.aggregate(aggregationPipeline);
    // page,pageSize,pageCount,total

    res.status(StatusCodes.OK).json({products:result,pagination:{
        page,pageSize:limit,pageCount:Math.ceil(productCount/limit),total:productCount,
    },categories,companies});
}

const getSingleProduct = async(req,res)=>{
    const {id:productId} = req.params;
    
    const product = await Product.findOne({_id:productId});
    if(!product){
        throw new CustomError.NotFoundError(`No product with id : ${productId}`);
    }
    res.status(StatusCodes.OK).json({product});
}
module.exports ={createProduct,getAllProducts,getSingleProduct};