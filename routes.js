// require express
const express = require('express');
const path = require('path');

// create our router object
const router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', (req, res) => {
    res.render('pages/home');
});

// route for account bookmarks page
router.get('/account/bookmarks', (req, res) => {
    res.render('pages/account-bookmarks');
});