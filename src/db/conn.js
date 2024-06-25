

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/olympics")
  .then(() => {
    console.log('Connection successful');
  })
  .catch((e) => {
    console.log('No connection', e);
  });
