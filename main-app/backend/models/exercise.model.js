﻿const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    user: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },

}, {
    timestamps: true,
});

const Exerise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exerise;