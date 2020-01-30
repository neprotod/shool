const {Router} = require('express');
const teacherController = require('../controllers/teacher');
const validationTeacher = require('../validations/teacher');
const route = Router();

route.post('/', validationTeacher.saveTeacher, teacherController.saveTeacher);
route.put('/:id', validationTeacher.updateTeacher, teacherController.updateTeacher);

route.delete('/:id', teacherController.deleteTeacher);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', teacherController.getTeachers);
route.get('/:id', teacherController.getTeacherById);

module.exports = route;