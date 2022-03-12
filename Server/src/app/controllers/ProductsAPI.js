const Product = require("../models/Product");

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
            const productExisted = await Product.findOne({ name: name });
            if (productExisted) {
                res.json({
                    statusText: 'error',
                    message: 'Product is existed'
                });
                console.log('error');
                return;
            }
            const isDeleted = await Product
                .findOneDeleted({ name: name });
            if (isDeleted) {
                res.json({
                    statusText: 'info',
                    message: 'This product is existed in recycle bin',
                    product: isDeleted
                });
                return;
            }
            const product = new Product({
                ...productBody,
                name,
                images,
                // categoryId:JSON.parse(req.body.categoryId),
                // information:JSON.parse(req.body.information),
                // warranty:JSON.parse(req.body.warranty),
                // tags:JSON.parse(req.body.tags)
            });
            await product.save();
            res.json({
                status: "success",
                message: "Create product successfully!",
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new ProductsAPI;
