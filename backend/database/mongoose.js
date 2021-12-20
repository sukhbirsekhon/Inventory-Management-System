const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://admin:admin@cluster0.uovx3.mongodb.net/IMS?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Database connected"))
.catch((error) => console.log(error))

module.exports = mongoose;