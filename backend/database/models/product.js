const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    productBrand: {
        type: String,
        trim: true,
        minlength: 2,
        required: true
    },
    productDesc: {
        type: String,
        trim: true,
        minlength: 3,
    },
    productSizeUnit: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    },
    productSize: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    },
    productUniqueId: {
        type: String,
        trim: true,
        minlength: 1,
    },
    productFavorite: {
        type: Boolean,
        trim: true,
        minlength: 3,
        required: true
    },
    _inventoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },

});

const product = mongoose.model('Product', ProductSchema);

module.exports = product;