const mongoose = require('mongoose');

const AlertSchema = new mongoose.Schema({
    lowQuantity: {
        type: String,
        trim: true,
        minlength: 1
    },
    highQuantity: {
        type: String,
        trim: true,
        minlength: 1
    },
    lowQuantityPercentage: {
        type: String,
        trim: true,
        minlength: 1
    },
    highQuantityPercentage: {
        type: String,
        trim: true,
        minlength: 1
    },
    _inventoryId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    _productId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
});

const alert = mongoose.model('Alert', AlertSchema);

module.exports = alert;