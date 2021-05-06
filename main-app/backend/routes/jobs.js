const router = require('express').Router();
let Job = require('../models/job.models');

//Incoming HTTPS get request

router.route('/').get((req, res) => {
    Job.find()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.username;


    const newJob = new Job({
        username,
        description
    })

    newJob.save()
        .then(() => res.json('Job added!'))
        .catch(err => res.status(400).json('Error:' + err));
});

//CRUD Application of jobs
router.route('/:id').get((req, res) => {
    Job.findById()
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Job.findByIdAndDelete(req.params.id)
        .then(jobs => res.json('Job Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Job.findById(req.params.id)
        .then(job => {
            job.username = req.body.username;
            job.description = req.body.description;

            job.save()
                .then(jobs => res.json('Job Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
