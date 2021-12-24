const express = require('express')
const app = express();
const mongoose = require('./database/mongoose');

const routes = require('./routes/routes');

const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT , POST , DELETE , OPTIONS , HEAD , PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(require('./routes/routes'));

app.listen(port, () => console.log("Server Connected on port " + port));
