const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    productId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
});

const product = mongoose.model('Product', ProductSchema);

module.exports = product;