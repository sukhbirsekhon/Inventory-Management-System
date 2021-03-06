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
        minlength: 2
    },
    productDesc: {
        type: String,
        trim: true,
        minlength: 3,
    },
    productSizeUnit: {
        type: String,
        trim: true,
        minlength: 1
    },
    productSize: {
        type: String,
        trim: true,
        minlength: 1
    },
    productUniqueId: {
        type: String,
        trim: true,
        minlength: 1,
    },
    productFavorite: {
        type: Boolean,
        trim: true,
        minlength: 3
    },
    productImage: {
        type: String,
        trim: true,
        minlength: 1,
    },
    _inventoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },

});

const product = mongoose.model('Product', ProductSchema);

module.exports = product;