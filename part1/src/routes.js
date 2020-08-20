const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
routes.post('/api/v1/products', ProductController.create);
module.exports = routes;