const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
    meta_data:{}
});

mongoose.model("file",fileSchema);
