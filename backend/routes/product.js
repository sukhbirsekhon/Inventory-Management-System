const express = require('express')
const router = express();

const Product = require('../database/models/product');

// GET All Products
router.get('/products', (req, res) => {
    Product.find({})
    .then(products => res.send(products))
    .catch((error) => console.log(error));
});

//GET Products By Inventory ID
router.get('/inventories/:inventoryId/products', (req, res) => {
    Product.find({ _inventoryId: req.params.inventoryId })
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

// ADD Product
router.post('/inventories/:inventoryId/products', (req, res) => {
    (new Product({
        'productName': req.body.productName, 
        'productBrand': req.body.productBrand,
        'productDesc': req.body.productDesc, 
        'productSizeUnit': req.body.productSizeUnit,
        'productSize': req.body.productSize,
        'productFavorite': req.body.productFavorite,
        'productUniqueId': req.body.productUniqueId,
        '_inventoryId': req.params.inventoryId }))
        .save()
        .then((product) => res.send(product))
        .catch((error) => console.log(error)); 
});

// GET Product By Product ID
router.get('/inventories/:inventoryId/products/:productId', (req, res) => {
    Product.find({ _id: req.params.productId })
    .then((product) => res.send(product))
    .catch((error) => console.log(error));
});

// UPDATE Product
router.patch('/inventories/:inventoryId/products/:productId', async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate({ _inventoryId: req.params.inventoryId, _id: req.params.productId }, req.body, {
            new: true
        } )
        res.send(updatedProduct);
    } catch(e) {
        res.status(404).send(updatedProduct)
    }
});

// DELETE Product
router.delete('/inventories/:inventoryId/products/:productId', (req, res) => {
    Product.findOneAndDelete({ _inventoryId: req.params.inventoryId, _id: req.params.productId })
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

module.exports = router;