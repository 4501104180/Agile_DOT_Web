const Product = require("../models/Product");
const mongoose = require("mongoose");

class ProductsAPI {
    // [GET] /products/
    async findAll(req, res) {
        try {
            const products = await Product.find({});
            res.json(products);
        } catch (error) {
            console.log(error);
        }
    }

    // [POST] /products
    async insertProduct(req, res) {
        try {
            const images = req.files.map((file) => file.originalname);
            const { name, ...productBody } = req.body;
            const product = new Product({
                ...productBody,
                name,
                images
            });
            await product.save();
            res.json({
                status: "success",
                message: "Create product successfully!",
                product
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PUT] /products/:productID
    async editProductById(req, res) {
        try {
            const { productID } = req.params;
            const { name, images, ...newBody } = req.body;
            const body = {
                ...req.body,
            };
            if (req.files) {
                body.images = req.files.map((file) => file.originalname);
            }
            if (name) {
                const product = await Product.findById(productID);
                product.name = name;
                await product.save();
            }
            const _product = await Product.findByIdAndUpdate(productID, body, {
                new: true
            });
            res.json({
                product: _product,
                status: "success",
                message: "Edit product successfully!",
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [DELETE] /product/:productID
    async deleteProductById(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { productID } = req.params;
            const result = await Product.delete({ _id: productID }, deletor);
            res.json({
                ...result,
                productID,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PATCH] /products/
    async deleteProducts(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { productIDs } = req.body;
            const result = await Product.delete({ _id: { $in: productIDs } }, deletor);
            res.json({
                ...result,
                productIDs,
            });
        } catch (error) {
            console.log(error);
        }
    }

    // [PATCH] /products/:productID
    async restoreByID(req, res) {
        try {
            const { productID } = req.params;
            const result = await Product.restore({ _id: productID });
            res.json({
                ...result,
                productID
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProductsAPI;
