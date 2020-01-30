const express = require('express');
const connectionDB = require('./src/db');
const rootRout = require('./src/routing');

// Start DB
connectionDB();

const app = express();

// Root routs
app.use(express.json());
app.use('/api', rootRout);

module.exports = app;