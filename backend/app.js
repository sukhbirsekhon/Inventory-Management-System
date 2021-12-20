const express = require('express')
const app = express();
const mongoose = require('./database/mongoose');

const Inventory = require('./database/models/inventory');
const Product = require('./database/models/product');

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT , POST , DELETE , OPTIONS , HEAD , PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

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


app.listen(3000, () => console.log("Server Connected on port 3000"));
