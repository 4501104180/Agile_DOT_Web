const Product = require('../models/Product');
const mongoose = require("mongoose");

class ProductsAPI {
    // [GET] /products/
    async findAll(req, res) {
        try {
            const products = await Product
                .find({});
            res.json(products);
        } catch (error) {
            console.log(error);
        }
    }

    // [POST] /products
    async insert(req, res) {
        try {
            const images = req.files.map((file) => file.originalname);
            const { name, ...productBody } = req.body;
            const isDeleted = await Product
                .findOneDeleted({ name: name });
            if (isDeleted) {
                res.json({
                    statusText: 'info',
                    message: 'This product is existed in recycle bin!',
                    product: isDeleted
                });
                return;
            }
            const product = new Product({
                ...productBody,
                name,
                images
            });
            await product.save();
            res.json({
                statusText: 'success',
                message: 'Create product successfully!',
                product
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PUT] /products/:productId
    async edit(req, res) {
        try {
            const { productId } = req.params;
            const { name, images, imagesString, ...newBody } = req.body;
            const isDeleted = await Product
                .findOneDeleted({ name: name });
            if (isDeleted) {
                res.json({
                    statusText: 'info',
                    message: 'This product is existed in recycle bin!',
                    product: isDeleted
                });
                return;
            };
            const body = {
                ...newBody
            };
            if (req.files && req.files.length > 0) {
                const images = req.files.map(file => file.originalname);
                body.images = images;
            } else {
                body.images = imagesString ? imagesString : [];
            }
            if (name) {
                const product = await Product
                    .findById(productId);
                product.name = name;
                await product.save();
            }
            const _product = await Product
                .findByIdAndUpdate(productId, body, {
                    new: true
                });
            res.json({
                product: _product,
                statusText: 'success',
                message: 'Edit product successfully!',
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [DELETE] /product/:productId
    async deleteById(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId('61af7d561ab0c6ea12eaa560');
            const { productId } = req.params;
            const result = await Product
                .delete({ _id: productId }, deletor);
            res.json({
                statusText: 'success',
                message: 'Delete product successfully!',
                ...result,
                productId,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PATCH] /products/
    async deleteAll(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId('61af7d561ab0c6ea12eaa560');
            const { productIds } = req.body;
            const result = await Product
                .delete({ _id: { $in: productIds } }, deletor);
            res.json({
                statusText: 'success',
                message: 'Delete selected products successfully!',
                ...result,
                productIds,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PATCH] /products/:productId
    async restoreById(req, res) {
        try {
            const { productId } = req.params;
            const result = await Product
                .restore({ _id: productId });
            res.json({
                statusText: 'success',
                message: 'Restore product successfully!',
                ...result,
                productId
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProductsAPI;
