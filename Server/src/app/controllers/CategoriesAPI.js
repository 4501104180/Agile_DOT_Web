const Category = require('../models/Category');
const mongoose = require('mongoose');
class CategoriesAPI {
    // [GET] /categories
    async findAll(req, res) {
        try {
            const categories = await Category
                .find({})
            res.json(categories);
        } catch (error) {
            console.log(error);
        }
    }; 

    // [GET] /categories/:slugCategory
    async findBySlug(req, res) {
        try {
            const { slugCategory } = req.params;
            const category = await Category
                .findOne({
                    slug: slugCategory,
                    status: 'active'
                });
            res.json({
                ...(category.toObject())
            });
        } catch (error) {
            console.log(error);
        }
    };
    // [POST] /categories
    async insertCategory(req, res) {
        try {
            const banners = req.files['banners'].map( file => file.originalname );
            const image = req.files['image'][0].originalname;
            const { title, ...categoryBody } = req.body;
            const categoryExisted = await Category.findOne({ title: title });
            if (categoryExisted) {
                res.json({
                    status: 'error',
                    message: 'Category is existed'
                });
                console.log('error');
                return;
            }
            const isDeleted = await Category
                .findOneDeleted({title: title});
            if(isDeleted) {
                res.json({
                    status: 'info',
                    message: 'Category is existed in recycle bin',
                    category: isDeleted
                });
                return;
            }
            const category = new Category({
                ...categoryBody,
                title,
                image,
                banners
            });
            await category.save();
            res.json({
                status: 'success',
                message: 'Create category successfully!'
            });
        } catch (error) {
            console.log(error);
        }
    };
     // [PUT] /categories/: categoryID
     async editCategoryById(req, res) {
        try { 
            const { categoryID } = req.params;
            console.log(categoryID);
            const { title, image, bannersString, ...newBody } = req.body;
            const isDeleted = await Category
                .findOneDeleted({ title: title });
            if (isDeleted) {
                res.json({
                    status: 'info',
                    message: 'Dự án tồn tại trong thùng rác!',
                    project: isDeleted
                });
                return;
            };
            const body = {
                ...newBody,
            };    
            if (req.files['banners'] && (req.files['banners'].length > 0)) {
                const banners = req.files['banners'].map(file => file.originalname);
                body.banners = banners;
            } else {
                body.banners = bannersString ? bannersString : [];
            }
            if (req.files['image'] && (req.files['image'].length > 0)) {
                const image = req.files['image'][0].originalname;
                body.image = image;
            }
            if (title) {
                const category = await Category.findById(categoryID);
                category.title = title;
                await category.save();
            }
            const _category = await Category.findByIdAndUpdate(categoryID, body, {
                new: true
            });
            res.json({
                category: _category,
                status: "success",
                message: "Edit Category successfully!",
            });
        } catch (error) {
            console.log(error);
        };
    };
    // [DELETE] /categories/:categoryID
    async deleteCategorybyID(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { categoryID } = req.params;
            const result = await Category
            .delete({ _id: categoryID }, deletor );
                res.json({
                    ...result,
                    categoryID,
                    status: 'success',
                    message: 'aaaa'
                });
        } catch (error) {
            console.log(error);
        };
    };
    // [DELETE] /categories/
    async deletedCategoryAll(req, res) {
        try {
            const deletor = mongoose.Types.ObjectId("61af7d561ab0c6ea12eaa560");
            const { categoryIDs } = req.body;
            const result = await Category
            .delete({ _id: { $in: categoryIDs }}, deletor );
                res.json({
                    ...result,
                    categoryIDs,
                    status: 'success',
                    message: 'aaaa'
                });
        } catch (error) {
            console.log(error);
        };
    };
    // [PATCH] /categories/:categoryID
    async restoreByID(req, res) {
        try {
        const { categoryID } = req.params;
        const result = await Category.restore({ _id: categoryID });
        res.json({
            status: "success",
            message: "Restore successfully",
            ...result,
            category: categoryID
        });
        } catch (error) {
        console.log(error);
        }
    };
};

module.exports = new CategoriesAPI;