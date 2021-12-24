const express = require('express')
const router = express();

const User = require('../database/models/user')

 router.get('/users', (req, res) => {
    User.find({})
    .then(users => res.send(users))
    .catch((error) => console.log(error));
});

router.post('/users', (req, res) => {
    (new User({
        'username': req.body.username, 'email': req.body.email, 'password': req.body.password }))
        .save()
        .then((user) => res.send(user))
        .catch((error) => console.log(error));    
});

router.get('/users/:userId', (req, res) => {
    User.find({ _id: req.params.userId })
    .then((user) => res.send(user))
    .catch((error) => console.log(error));
});

module.exports = router;