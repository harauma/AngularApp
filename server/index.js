const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const SampleDb = require('./sample-db');

const productRouters = require('./routes/products');

const app = express();

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(
  () => {
    const sampleDb = new SampleDb();
    sampleDb.initDb();
  }
);

app.use('/app/v1/products', productRouters);

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
  console.log('I am running!');
});