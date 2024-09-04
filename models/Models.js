const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer_name: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    order_date: { type: Date, required: true },
    status: { type: String, required: true },
    number: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
