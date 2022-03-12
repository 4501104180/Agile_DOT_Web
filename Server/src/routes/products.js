const express = require('express');
const router = express.Router();

const productsAPI = require('../app/controllers/ProductsAPI');

router.get('/', productsAPI.findAll);

module.exports = router;
