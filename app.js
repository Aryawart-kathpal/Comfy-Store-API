require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app =express();

// other packages
const morgan = require('morgan');
// const populateData = require('./populate');

//database
const connectDB = require('./db/connect');

const cors = require('cors');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimiter = require('express-rate-limit');

//routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

// import middlewares
const cookieParser = require('cookie-parser');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware= require('./middleware/error-handler');


// invoke the middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', //frontend URL
    credentials: true // **Allowing cookies to be sent
}));

app.use(helmet());
app.use(mongoSanitize());
app.use(rateLimiter({
    windowMs: 15 * 60 * 1000, 
    max: 100
}));

app.use(cookieParser(process.env.JWT_SECRET));
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/products',productRoutes);
app.use('/api/v1/orders',orderRoutes);


app.get('/',(req,res)=>{
    res.send('This is Comfy store API');
});

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