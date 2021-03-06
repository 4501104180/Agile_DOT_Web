const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;

const Category = new Schema({
    _id: {
        type: Number
    },
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        slug: 'title',
        unique: true
    },
    image: {
        type: String,
        default: ''
    },
    banners: {
        type: Array,
        default: []
    },
    displayOrder: {
        type: Number,
        default: 1
    }
}, {
    _id: false,
    timestamps: true
});

mongoose.plugin(slug);
Category.plugin(AutoIncrement);

Category.plugin(mongooseDelete,{
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true
});
module.exports = mongoose.model('Category', Category);