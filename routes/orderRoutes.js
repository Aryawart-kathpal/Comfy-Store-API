const express = require('express');
const router = express.Router();

const {createOrder,getOrders} = require("../controllers/orderController");
const {authenticateUser} = require("../middleware/authentication");

router.route('/').get(authenticateUser,getOrders).post(authenticateUser,createOrder);

module.exports = router;