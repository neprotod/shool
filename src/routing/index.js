const {Router} = require('express');
const route = Router();

const teacher = require('./teacher');
const lecture = require('./lecture');

route.use('/teacher', teacher);
route.use('/lecture', lecture);

module.exports = route;