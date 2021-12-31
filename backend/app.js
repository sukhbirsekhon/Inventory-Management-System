const express = require('express')
const app = express();
const http = require('http');
const mongoose = require('./database/mongoose');

const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
    res.send('This is a backend API server for the Inventory Management System. The app is running on http://ims39.herokuapp.com');
});


app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT , POST , DELETE , OPTIONS , HEAD , PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(require('./routes/inventory'));
app.use(require('./routes/product'));
app.use(require('./routes/user'));
app.use(require('./routes/alert'));

app.listen(port, () => console.log("Server Connected on port " + port));
