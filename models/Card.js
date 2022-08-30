const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardSchema = new Schema ({
    order: Number,
    img: String,
    type: Number,
    direction: { type: Number, enum: [1,2]}
});

module.exports = mongoose.model('Card', CardSchema);