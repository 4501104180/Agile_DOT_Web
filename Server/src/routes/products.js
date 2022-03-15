const express = require('express');
const router = express.Router();

// Controllers
const productsAPI = require('../app/controllers/ProductsAPI');
// Middlewares
const upload = require('../app/middlewares/upload');

router.patch('/:productID', productsAPI.restoreByID);
router.patch('/', productsAPI.deleteProducts);
router.delete('/:productID', productsAPI.deleteProductById);
router.put('/:productID', upload.array('images', 10), productsAPI.editProductById);
router.post('/', upload.array('images', 10), productsAPI.insertProduct);
router.get('/', productsAPI.findAll);

module.exports = router;
