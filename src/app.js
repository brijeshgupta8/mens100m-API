

const express = require('express');
const mongoose = require('mongoose');
const MensRanking = require('./models/mens');
require('./db/conn');
require('dotenv').config();
const router = require("../src/routers/men")
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('Hello from Brijesh');
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
