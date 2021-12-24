const express = require('express')
const router = express();

const Product = require('../database/models/product');

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