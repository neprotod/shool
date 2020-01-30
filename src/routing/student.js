const {Router} = require('express');
const studentController = require('../controllers/student');
const validationStudent = require('../validations/student');
const route = Router();

route.post('/', validationStudent.saveStudent, studentController.saveStudent);
route.put('/:id', validationStudent.updateStudent, studentController.updateStudent);

route.delete('/:id', studentController.deleteStudent);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', studentController.getStudents);
route.get('/:id', studentController.getStudentById);

module.exports = route;