// require express
const express = require('express');
const path = require('path');

// create our router object
const router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function (req, res) {
	res.render('pages/home');
});