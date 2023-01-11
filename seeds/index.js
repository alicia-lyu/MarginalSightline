const mongoose = require('mongoose');
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
    await Card.deleteMany({});
    for (let seedCard of seedCards) {
        let seedCardDP = new Card(seedCard);
        await seedCardDP.save();
    }
};


seedDB().then(() => {
    mongoose.connection.close();
});

Card.find({}).then((cardDPs) => {
    console.log(cardDPs);
});