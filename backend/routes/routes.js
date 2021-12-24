const express = require('express')
const router = express();

const Inventory = require('../database/models/inventory');
const Product = require('../database/models/product');

/**
 * Inventory endpoints
 */
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

/**
 * Product endpoints 
 */
 router.get('/inventories/:inventoryId/products', (req, res) => {
    Product.find({ _inventoryId: req.params.inventoryId })
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

router.post('/inventories/:inventoryId/products', (req, res) => {
    (new Product({
        'productName': req.body.productName, '_inventoryId': req.params.inventoryId }))
        .save()
        .then((product) => res.send(product))
        .catch((error) => console.log(error)); 
});

module.exports = router;