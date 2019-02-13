////////////// Express //////////////

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const app = express();
const port = 1800;
const open = require('open');

// Set the templating engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Use body parser
app.use(bodyParser.urlencoded({
    extended: true
}));

// Route our app
const router = require('./routes');
app.use('/', router);

// Set static files ( css & images etc )
app.use(express.static(__dirname + '/assets'));

// Start the server
app.listen(port, () => {
    console.log('HTML only server is running');
});

//Opens the homepage in default browser
open(`http://localhost:${port}`);