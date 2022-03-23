const express = require('express');
const router = express.Router();

// Controllers
const productsAPI = require('../app/controllers/ProductsAPI');
// Middlewares
const upload = require('../app/middlewares/upload');

router.patch('/restore/:productId', productsAPI.restoreById);
router.patch('/', productsAPI.deleteAll);
router.delete('/:productId', productsAPI.deleteById);
router.put('/:productId', upload.array('images', 10), productsAPI.edit);
router.post('/', upload.array('images', 10), productsAPI.insert);
router.get('/', productsAPI.findAll);

module.exports = router;
