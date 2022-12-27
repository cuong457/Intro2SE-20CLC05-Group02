const express = require('express');
const path = require('path');

const app = express();

// parsing cookies
const cookieParser = require('cookie-parser');

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// HTTP logger
// app.use(morgan('combined'));

// Routes init
route(app);

module.exports = app;
