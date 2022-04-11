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

    // [GET] /products/:page/:number
    async findAllWithPagination(req, res) {
        try {
        let { page, number } = req.params;
        page = parseInt(page);
        number = parseInt(number);
        const totalProduct = await Product.count({ status: "active" });
        const totalPage = Math.ceil(totalProduct / number);
        const products = await Product.find({ status: "active" })
            .skip((page - 1) * number)
            .limit(number);
        res.json({
            products,
            pagination: {
            totalPage,
            currentPage: page,
            },
        });
        } catch (error) {
        console.log(error);
        }
    }

    // [GET] /products/top/:type/:number
    async topProducts(req, res) {
        try {
        const { type, number } = req.params;
        const products = await Product.find({ status: "active" })
            .sort({ [type]: -1 })
            .limit(parseInt(number));
        res.json(products);
        } catch (error) {
        console.log(error);
        }
    }

    // [GET] /products/similar/:productId/:number
    async similarProducts(req, res) {
        try {
        const { productId, number } = req.params;
        const currentCategories = await Product.findOne({
            _id: productId,
        }).select("categoryId");
        const products = await Product.find({
            _id: { $ne: productId },
            categoryId: { $in: currentCategories.categoryId },
        }).limit(parseInt(number));
        res.json(products);
        } catch (error) {
        console.log(error);
        }
    }

    // [POST] /products/c
    async findByCategory(req, res) {
        try {
        const { categoryId, take, ...filter } = req.body;
        let { sort, page, rating, price } = filter;
        page = parseInt(page);
        rating = parseInt(rating);
        let direction = 1;
        const [fromStar, toStar] = rating ? [rating - 0.9, rating] : [0, 5];
        const [fromPrice, toPrice] = price
            ? price.split("-").map((el) => Number(el))
            : [0, 99999999999];
        switch (sort) {
            case "top_seller":
            sort = "sold";
            break;
            case "newest":
            sort = "createdAt";
            break;
            case "price-asc":
            case "price-desc":
            const [tag, direc] = sort.split("-");
            sort = tag;
            direction = direc === "asc" ? 1 : -1;
            break;
            default:
            sort = "viewed";
        }
        const queries = {
            status: "active",
            categoryId: categoryId,
            "rating.average": {
            $gte: fromStar,
            $lte: toStar,
            },
            price: {
            $gte: fromPrice,
            $lte: toPrice,
            },
        };
        const result = await Product.aggregate([
            { $match: queries },
            {
            $facet: {
                products: [
                { $sort: { [sort]: direction } },
                { $skip: (page - 1) * take },
                { $limit: take },
                ],
                totalProduct: [{ $group: { _id: null, count: { $sum: 1 } } }],
            },
            },
        ]);
        const { products, totalProduct } = result[0];
        const count = totalProduct[0] ? totalProduct[0].count : 0;
        const totalPage = Math.ceil(count / take);
        res.json({
            products,
            totalProduct: count,
            pagination: {
            totalPage,
            page,
            },
            filter,
        });
        } catch (error) {
        console.log(error);
        }
    }

    // [GET] /products/:slugProduct
    async findBySlug(req, res) {
        try {
        const { slugProduct } = req.params;
        const product = await Product.findOne({
            slug: slugProduct,
        });
        res.json(product);
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
