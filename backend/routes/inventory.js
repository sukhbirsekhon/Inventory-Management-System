const express = require('express')
const router = express();

const Inventory = require('../database/models/inventory');

router.get('/inventories', (req, res) => {
    Inventory.find({})
    .then(inventories => res.send(inventories))
    .catch((error) => console.log(error));
});

router.post('/inventories', (req, res) => {
    (new Inventory({
        'inventoryName': req.body.inventoryName }))
        .save()
        .then((inventory) => res.send(inventory))
        .catch((error) => console.log(error));    
});

router.get('/inventories/:inventoryId', (req, res) => {
    Inventory.find({ _id: req.params.inventoryId })
    .then((inventory) => res.send(inventory))
    .catch((error) => console.log(error));
});

module.exports = router;