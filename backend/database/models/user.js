const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    email: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minlength: 3,
        required: true
    }
});

const user = mongoose.model('User', UserSchema);

module.exports = user;