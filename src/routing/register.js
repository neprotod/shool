const {Router} = require('express');
const registerController = require('../controllers/register');
const validationRegister = require('../validations/register');
const route = Router();

route.post('/', validationRegister.saveRegister, registerController.saveRegister);
route.put('/:id', validationRegister.updateRegister, registerController.updateRegister);

route.delete('/:id', registerController.deleteRegister);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', registerController.getRegisters);
route.get('/:id', registerController.getRegisterById);

module.exports = route;