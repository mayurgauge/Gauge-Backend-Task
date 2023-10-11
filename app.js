const express = require('express');
const app = express();
const morgan = require('morgan');

// Morgan middleware
app.use(morgan('tiny'));

// Regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up EJS as the render engine
app.set('view engine', 'ejs');

// Import all the routes here
const home = require('./routes/HomeRoute');
const user = require('./routes/UserRoute');

// Router middleware
app.use('/api/v1', home);
app.use('/api/v1', user);

module.exports = app;
