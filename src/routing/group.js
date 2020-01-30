const {Router} = require('express');
const groupController = require('../controllers/group');
const validationGroup = require('../validations/group');
const route = Router();

route.post('/', validationGroup.saveGroup, groupController.saveGroup);
route.put('/:id', validationGroup.updateGroup, groupController.updateGroup);

route.delete('/:id', groupController.deleteGroup);

route.use((err, req, res, next)=>{
  res.status(500).json(err);
});

route.get('/', groupController.getGroups);
route.get('/:id', groupController.getGroupById);

module.exports = route;