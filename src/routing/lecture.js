const {Router} = require('express');
const lectureController = require('../controllers/lecture');
const validationLecture = require('../validations/lecture');
const route = Router();

route.post('/', validationLecture.saveLecture, lectureController.saveLecture);
route.put('/:id', validationLecture.updateLecture, lectureController.updateLecture);

route.delete('/:id', lectureController.deleteLecture);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', lectureController.getLectures);
route.get('/:id', lectureController.getLectureById);

module.exports = route;