const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please provide your name'],
        maxlength :[30,"Name can't be more than 30 characters"],
        minlength : [3,"Name can't be less than 3 characters"],
    },
    email : {
        type:String,
        required:[true,'Please provide email'],
        validate:{
            validator:validator.isEmail,
            message:'Please provide valid email',
        },
        unique:[true,'Email already exists']
    },
    password:{
        type:String,
        required:[true,'Please provide password'],
        minlength:[6,"Password can't be less than 6 characters"],
    },
    role:{
        type:String,
        default:'user',
        enum:['user','admin'],
    }
},{timestamps:true});

userSchema.pre('save',async function(){
    const salt= await bcrypt.genSalt(10);
    if(!this.isModified('password')) return;
    this.password = await bcrypt.hash(this.password,salt);
});

userSchema.methods.comparePassword = async function(candidatePassword){
    const isMatch = await bcrypt.compare(candidatePassword,this.password);
    return isMatch;
}

module.exports= mongoose.model('User',userSchema);