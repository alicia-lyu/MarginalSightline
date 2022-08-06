const mongoose = require('mongoose');
const bodyparts = require('./bodyparts');
const Bodypart = require('../models/Bodypart');

mongoose.connect('mongodb://localhost:27017/marginal-sightline');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
db.on("close", () => {
    console.log("Database closed");
})

const seedDB = async () => {
    await Bodypart.deleteMany({});
    for (let bodypart of bodyparts) {
        let bodypart_dp = new Bodypart(bodypart);
        await bodypart_dp.save();
    }
};


seedDB().then(() => {
    mongoose.connection.close();
});

Bodypart.find({}).then((bodypart_dps) => {
    console.log(bodypart_dps);
});