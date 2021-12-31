const express = require('express')
const router = express();

const Alert = require('../database/models/alert');

// GET All Alerts
router.get('/alerts', (req, res) => {
    Alert.find({})
    .then(alerts => res.send(alerts))
    .catch((error) => console.log(error));
});

// ADD Alert
router.post('/alerts/inventories/:inventoryId/products/:productId', async (req, res) => {
    (new Alert({
        'lowQuantity': req.body.lowQuantity, 
        'highQuantity': req.body.highQuantity,
        'lowQuantityPercentage': req.body.lowQuantityPercentage,
        'highQuantityPercentage': req.body.highQuantityPercentage,
        '_inventoryId': req.params.inventoryId,
        '_productId': req.params.productId }))
        .save()
        .then((alert) => res.send(alert))
        .catch((error) => console.log(error));    
});

// GET Alerts By Product ID
router.get('/alerts/products/:productId', (req, res) => {
    Alert.find({ _productId: req.params.productId })
    .then((alert) => res.send(alert))
    .catch((error) => console.log(error));
});

// GET Alert By Product ID
router.get('/alerts/inventories/:inventoryId', (req, res) => {
    Alert.find({ _inventoryId: req.params.inventoryId })
    .then((alert) => res.send(alert))
    .catch((error) => console.log(error));
});

// UPDATE Alert
router.patch('/alerts/products/:productId', async (req, res) => {
    try {
        const updatedAlert = await Alert.findOneAndUpdate({ _productId: req.params.productId }, req.body, {
            new: true
        } )
        res.send(updatedAlert);
    } catch(e) {
        res.status(404).send(updatedAlert)
    }
});

// DELETE Alert
router.delete('/alerts/products/:productId', (req, res) => {
    Alert.findOneAndDelete({ _productId: req.params.productId})
    .then((alerts) => res.send(alerts))
    .catch((error) => console.log(error));
});

module.exports = router;