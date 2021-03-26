﻿
const router = require('express').Router();
let User = require('../models/user.model');

//Incoming HTTPS get request 

router.route('/').get((req, res) => {
    User.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;