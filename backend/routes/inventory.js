const express = require('express')
const router = express();

const Inventory = require('../database/models/inventory');

// GET All Inventories
router.get('/inventories', (req, res) => {
    Inventory.find({})
    .then(inventories => res.send(inventories))
    .catch((error) => console.log(error));
});

// ADD Inventory
router.post('/inventories', (req, res) => {
    (new Inventory({
        'inventoryName': req.body.inventoryName, 
        'inventoryDesc': req.body.inventoryDesc }))
        .save()
        .then((inventory) => res.send(inventory))
        .catch((error) => console.log(error));    
});

// GET Inventory By ID
router.get('/inventories/:inventoryId', (req, res) => {
    Inventory.find({ _id: req.params.inventoryId })
    .then((inventory) => res.send(inventory))
    .catch((error) => console.log(error));
});

// UPDATE Inventory
router.patch('/inventories/:inventoryId', async (req, res) => {
    try {
        const updatedInventory = await Inventory.findOneAndUpdate({ _inventoryId: req.params.inventoryId }, req.body, {
            new: true
        } )
        res.send(updatedInventory);
    } catch(e) {
        res.status(404).send(updatedInventory)
    }
});

// DELETE Inventory
router.delete('/inventories/:inventoryId', (req, res) => {
    Inventory.findOneAndDelete({ _inventoryId: req.params.inventoryId})
    .then((inventories) => res.send(inventories))
    .catch((error) => console.log(error));
});

module.exports = router;