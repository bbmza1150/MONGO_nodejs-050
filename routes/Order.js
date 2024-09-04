const express = require('express');
const { getOrder, getOrders,createOrder,updateOrder,deleteOrder } = require('../controllers/OrderControllers');
const router = express.Router();
router.get('/Orders',getOrders);
router.get('/Order/:product',getOrder);
router.post('/Order',createOrder);
router.delete('/Order/:id',deleteOrder);
router.put('/Order/:id',updateOrder);
module.exports = router;