const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/index');
const tasksRoute = require('./routes/tasks');

const app = express();
const port = process.env.PORT || 3000;

// This tests to see if we have NODE_ENV in our environment.
// Only load the dotenv if we need it.
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

app.use(logger('dev'));
app.listen(port, () => console.log('server started on port', port));

// We are only going to accept json
app.use(bodyParser.json());

// set up some logging
app.use(logger(isDev ? 'dev' : 'common'));

app.use('/', homeRoute);
app.use('/tasks', tasksRoute);

// generic error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send('Something Broke!');
});


