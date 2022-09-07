const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConfidingSchema = new Schema ({
    name: String,
    email: String,
    category: {
        type: String, 
        enum: ['Skin', 'Quantitative Change', 'Discipline', 'Imperfect']},
    story: String
});

module.exports = mongoose.model('Confiding', ConfidingSchema);