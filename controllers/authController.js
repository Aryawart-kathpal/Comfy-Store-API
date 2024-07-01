require('dotenv').config();
const User = require('../models/User');
const {StatusCodes} = require('http-status-codes');
const CustomError = require('../errors');
const {attachCookiesToResponse,createTokenUser} = require('../utils');

const register = async(req,res)=>{
    const {email,name,password} = req.body;
    const user =await User.create({email,name,password});

    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res,user:tokenUser});
    return res.status(StatusCodes.CREATED).json({user:tokenUser});
}

const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new CustomError.BadRequestError('Please provide email and password');
    }

    const user = await User.findOne({email});
    if(!user){
        throw new CustomError.BadRequestError(`No user exists with email : ${email}`);
    }

    const isPasswordCorrect = await user.comparePassword(password);
    if(!isPasswordCorrect){
        throw new CustomError.UnauthenticatedError("Incorrect password entered");
    }

    const tokenUser = createTokenUser(user);
    attachCookiesToResponse({res,user:tokenUser});
    
    res.status(StatusCodes.OK).json({user:tokenUser});
}

const logout = async(req,res)=>{
    res.cookie('token','logout',{
        httpOnly:true,
        expiresIn : new Date(Date.now())
    });
    res.status(StatusCodes.OK).json({msg:'User logged out successfully'});
}

module.exports = {register,login,logout};