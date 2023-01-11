const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('main/story', {tabName: 'archive'});
})

router.post('/', async (req, res) => {
    let {name, email, category, story} = req.body;
    let confiding = new Confiding({name, email, category, story});
    await confiding.save();
    req.flash('success', 'Story sent successfully!');
    res.redirect('/archive')
})

module.exports = router