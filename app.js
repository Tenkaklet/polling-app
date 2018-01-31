const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const morgan = require('morgan');
require('./config/db');

const app = express();

const poll = require('./routes/poll');


// Logging
app.use(morgan('dev'));

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Enable Cors
app.use(cors());


// Routes
app.use('/poll', poll);

// Start server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});