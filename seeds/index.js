const mongoose = require('mongoose');
const seedBodyparts = require('./bodyparts');
const Bodypart = require('../models/Bodypart');
const seedCards = require('./cards')
const Card = require('../models/Card');

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
    for (let bodypart of seedBodyparts) {
        let bodypartDP = new Bodypart(bodypart);
        await bodypartDP.save();
    }
    
    await Card.deleteMany({});
    for (let seedCard of seedCards) {
        let seedCardDP = new Card(seedCard);
        await seedCardDP.save();
    }
};


seedDB().then(() => {
    mongoose.connection.close();
});

Bodypart.find({}).then((bodypartDPs) => {
    console.log(bodypartDPs);
});

Card.find({}).then((cardDPs) => {
    console.log(cardDPs);
});