// createOrder, getOrder

const Order = require("../models/Order");

const createOrder = async(req,res)=>{
    const {address,cartItems,chargeTotal, name,numItemsInCart,orderTotal} = req.body;
    req.body.user=req.user.userId;

    const order = await Order.create(req.body);

    res.status(201).json({order});
}

const getOrders = async(req,res)=>{
    const {userId} = req.user;

    const result = Order.find({user:userId});

    const limit=10;
    const page = req.query.page  || 1;
    const skip = (page-1)*limit;

    const orderCount = await Order.countDocuments({user:userId});
    const pagination={
        page,pageSize:limit,pageCount:Math.ceil(orderCount/limit),total:orderCount,
    }

    result.skip(skip).limit(10);
    
    const orders = await result;
    res.status(200).json({orders,pagination});
}

module.exports  ={createOrder,getOrders}