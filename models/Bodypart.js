const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BodypartSchema = new Schema ({
    num: Number,
    x1: Number,
    y1: Number,
},{
    virtuals: {
        location1: {
            get () {
                return [this.x1, this.y1];
            }
        },
        location2: {
            get () {
                return [this.x2, this.y2];
            }
        }
    }
});

module.exports = mongoose.model('Bodypart', BodypartSchema);