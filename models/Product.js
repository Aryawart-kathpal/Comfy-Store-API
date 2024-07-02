const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100,
    },
    company:{
        type:String,
        required:true,
        enum:{
            values:['Luxora','Comfora','Modenza','Homestead','Artifex'],
            message:'{VALUE} is not supported'
        }
    },
    description:{
        type:String,
        minlength:5,
        default:'No description available',
    },
    featured:{
        type:Boolean,
        default:false,
    },
    category:{
        type:String,
        required:true,
        enum:{
            values:['Sofas','Chairs','Tables','Beds','Kids'],
            message:'{VALUE} is not supported'
        },
    },
    image:{
        type:String,
        default:'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    price:{
        type:Number,
        required:true,
    },
    shipping:{
        type:Boolean,
        default:false,
    },
    colors:{
        type:[String],
        required:true
    }
},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);