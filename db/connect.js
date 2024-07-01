const mongoose = require('mongoose');

mongoose.set("strictQuery",true);

const connectDB = (url)=>{
    return mongoose.connect(url,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true, doesn't matter in new version
    });
};

module.exports = connectDB;