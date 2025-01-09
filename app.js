const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
