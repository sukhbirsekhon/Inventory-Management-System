const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    inventoryName: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    inventoryDesc: {
        type: String, 
        trim: true, 
        minlength: 3
    }
});

const inventory = mongoose.model('Inventory', InventorySchema);

module.exports = inventory;