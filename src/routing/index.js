const {Router} = require('express');
const route = Router();

const register = require('./register');
const group = require('./group');
const room = require('./room');
const student = require('./student');
const teacher = require('./teacher');
const lecture = require('./lecture');

route.use('/register', register);
route.use('/group', group);
route.use('/room', room);
route.use('/student', student);
route.use('/teacher', teacher);
route.use('/lecture', lecture);

module.exports = route;