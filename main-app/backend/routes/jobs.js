const router = require('express').Router();
let Job = require('../models/job.models');

//CRUD Application of jobs


router.route('/').get((req, res) => {
    Job.find()
        .sort({ date: -1 }) //Descending date displays
        .then(jobs => res.json(jobs))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').post((req, res) => {
  const newJob = new Job({
    name: req.body.name
  });

  newJob.save().then(job => res.json(job))
});



router.route('/:id').delete((req, res) => {
    Job.findByIdAndDelete(req.params.id) //Fetching from uri
        .then(jobs => res.json('Job Deleted')) //Ensures its able to delette
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
