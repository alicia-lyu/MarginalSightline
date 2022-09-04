if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
const express = require('express');
const session = require('express-session');
const mongoDBStore = require('connect-mongo');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const morgan = require('morgan');
const methodOverride = require('method-override');
const favicon = require('serve-favicon');


const Bodypart = require('./models/Bodypart');
const Card = require('./models/Card');

const dbUrl = process.env.DB_URL
const localDB = 'mongodb://localhost:27017/marginal-sightline'

const store = new mongoDBStore({
    mongoUrl: localDB,
    secret: 'foo',
    touchAfter: 24 * 3600,
})

store.on("error", (error) => {
    console.log(error)
})

const sessionConfig = {
    store,
    name: 'session',
    secret: 'foo',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

mongoose.connect(localDB);

const app = express()
app.use(session(sessionConfig));
app.use(favicon(path.join(__dirname, 'assets/img/thumbnails/favicon.ico')));
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'assets')))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(morgan('tiny'));

app.get('/', async (req, res) => {
    const bodyparts = await Bodypart.find({});
    res.render('main/home', { bodyparts, tabName: 'Home' });
});

app.get('/home-revealed', async (req, res) => {
    const bodyparts = await Bodypart.find({});
    res.render('main/homeRevealed', { bodyparts, tabName: 'Home' });
});

app.get('/research', (req, res) => {
    res.render('main/research', {tabName: 'Research'});
});

app.get('/archive', async (req, res) => {
    const cards = await Card.find({});
    res.render('main/archive', { cards: JSON.stringify(cards), tabName: 'Archive' });
});

app.get('/opposition', (req, res) => {
    res.render('main/opposition', {tabName: 'Opposition'});
});

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(3000, () => {
    console.log('Serving on port 3000')
});