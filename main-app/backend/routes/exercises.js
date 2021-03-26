const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//Incoming HTTPS get request 

router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.username;


    const newExercise = new Exercise({
        username,
        description
    })

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

module.exports = router;
