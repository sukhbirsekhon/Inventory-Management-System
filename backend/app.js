const express = require('express')
const app = express();
const mongoose = require('./database/mongoose');

const Inventory = require('./database/models/inventory');
const Product = require('./database/models/product');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT , POST , DELETE , OPTIONS , HEAD , PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/**
 * Inventory endpoints
 */
app.get('/inventories', (req, res) => {
    Inventory.find({})
    .then(inventories => res.send(inventories))
    .catch((error) => console.log(error));
});

app.post('/inventories', (req, res) => {
    (new Inventory({
        'inventoryName': req.body.inventoryName }))
        .save()
        .then((inventory) => res.send(inventory))
        .catch((error) => console.log(error));    
});

app.get('/inventories/:inventoryId', (req, res) => {
    Inventory.find({ _id: req.params.inventoryId })
    .then((inventory) => res.send(inventory))
    .catch((error) => console.log(error));
});

/**
 * Product endpoints 
 */
app.get('/inventories/:inventoryId/products', (req, res) => {
    Product.find({ _inventoryId: req.params.inventoryId })
    .then((products) => res.send(products))
    .catch((error) => console.log(error));
});

app.post('/inventories/:inventoryId/products', (req, res) => {
    (new Product({
        'productName': req.body.productName, '_inventoryId': req.params.inventoryId }))
        .save()
        .then((product) => res.send(product))
        .catch((error) => console.log(error)); 
});

app.listen(port, () => console.log("Server Connected on port " + port));
