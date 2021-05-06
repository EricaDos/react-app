const router = require('express').Router();
let Neighborhood = require('../models/neighborhood.model');

//Incoming HTTPS get request

router.route('/').get((req, res) => {
    Neighborhood.find()
        .then(neighborhoods => res.json(neighborhoods))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.username;


    const newNeighborhood = new Neighborhood({
        username,
        description
    })

    newNeighborhood.save()
        .then(() => res.json('Neighborhood added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

//CRUD Application of neighborhoods
router.route('/:id').get((req, res) => {
    Neighborhood.findById()
        .then(neighborhoods => res.json(neighborhoods))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Neighborhood.findByIdAndDelete(req.params.id)
        .then(neighborhoods => res.json('Neighborhood Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Neighborhood.findById(req.params.id)
        .then(neighborhood => {
            neighborhood.username = req.body.username;
            neighborhood.description = req.body.description;

            neighborhood.save()
                .then(neighborhoods => res.json('Neighborhood Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
