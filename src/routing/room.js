const {Router} = require('express');
const roomController = require('../controllers/room');
const validationRoom = require('../validations/room');
const route = Router();

route.post('/', validationRoom.saveRoom, roomController.saveRoom);
route.put('/:id', validationRoom.updateRoom, roomController.updateRoom);

route.delete('/:id', roomController.deleteRoom);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', roomController.getRooms);
route.get('/:id', roomController.getRoomById);

module.exports = route;