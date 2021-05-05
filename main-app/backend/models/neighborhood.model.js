const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({
    username: {
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

const Neighborhood = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = Neighborhood;
