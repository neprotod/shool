const {Router} = require('express');
const route = Router();

const lecture = require('./lecture');

route.use('/lecture', lecture);

module.exports = route;