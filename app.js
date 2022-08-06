const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const methodOverride = require('method-override');
const Bodypart = require('./models/Bodypart');

mongoose.connect('mongodb://localhost:27017/marginal-sightline');

const app = express()
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));


app.get('/', async (req, res) => {
    const bodyparts = await Bodypart.find({});
    res.render('home', { bodyparts });
});

app.get('/research', (req, res) => {
    res.render('research');
});

app.get('/archive', async (req, res) => {
    const bodyparts = await Bodypart.find({});
    res.render('archive', { bodyparts });
});

app.get('/opposition', (req, res) => {
    res.render('opposition');
});

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
});