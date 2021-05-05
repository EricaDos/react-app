const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
require('dotenv').config();

const api = require('../backend/routes/users.js')

const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/public', express.static('public'));

app.use('/api', api)


const uri = process.env.ATLAS_URI;
//Database URI which is provided by Mongoose and says where the Database is stored
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB Database Connection Established");
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

//Initial routes
// app.use("/api/v1/cleaners", cleaners)
// app.use("*", (req, res) => res.status(404).json({error: "Not Found"})) //Wildcard and not in route file



app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
