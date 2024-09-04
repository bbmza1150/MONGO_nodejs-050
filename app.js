const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

app.use(express.json());

dotenv.config(); 

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error('MONGO_URL is not defined in the .env file');
    process.exit(1);  
}

mongoose.connect(MONGO_URL, {})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const OrderRoutes = require('./routes/Order');
app.use('/api', OrderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
