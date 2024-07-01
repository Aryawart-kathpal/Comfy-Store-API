require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app =express();

// other packages
const morgan = require('morgan');

//database
const connectDB = require('./db/connect');

const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimiter = require('express-rate-limit');

//routes
const authRoutes = require('./routes/authRoutes');

// import middlewares
const cookieParser = require('cookie-parser');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');


// invoke the middleware
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
//rate limit here

app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());

//routes
// app.get('/',async(req,res)=>{
//     res.send('Hello to comfy store');
// })
app.use('/api/v1/auth',authRoutes);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port=process.env.PORT || 5000;

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("Successfully connected to the database");
        app.listen(port,()=>console.log(`Server listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();