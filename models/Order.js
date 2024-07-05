// address,cartItems,user,name,orderTotal,numItemsInCart
const mongoose = require('mongoose');
const Product = require('./Product');

const cartItemSchema = mongoose.Schema({
    cartID:String,
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
    },
    title: String,
    price: Number,
    company:String,
    productColor :String,
    amount: Number,
    image : String,
});

const orderSchema  = new mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    cartItems:{
        type:[cartItemSchema],
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    orderTotal:{
        type:Number,
        required:true,
    },
    numItemsInCart:{
        type:Number,
        required:true,
    }
},{timestamps:true});

module.exports = mongoose.model('Order',orderSchema);