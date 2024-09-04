const { response } = require('express');
const Order = require('../models/Models')

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};

exports.getOrder = async (req, res) => {
    try {
        const { product } = req.body;
        const order = await Order.findOne({ product: product });
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order); 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.createOrder = async (req, res) => {
    const { customer_name, product, quantity, order_date, status, number } = req.body;
    const order = new Order({ customer_name, product, quantity, order_date, status, number });
    
    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        const data = { $set: req.body };
        await Order.findByIdAndUpdate(id, data, { new: true }); 
        
        res.status(200).json({ message: 'Order updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }
};

exports.deleteOrder = async(req,res) =>{
    try{
        const{id}= req.params;
        const Order = await Order.findByid(id);
        if(!Order)return res.status(404).json({message:'Order not found'}) 
            await Order.findByidAndDelete(id);
        res.status(200).json({message:'Order Delete succesfully'});
           }catch(err){
            res.status(404).json({message:err.message});
           }
};
