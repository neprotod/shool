const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const validationUtil = require('../utils/validation');
const empty = require('is-empty');

// Schema validation
const validationSchema = Joi.object({
  room: Joi.objectId().message('Room must be a ObjectId'),
  teacher: Joi.objectId().message('Teacher must be a ObjectId'),
  lecture: Joi.objectId().message('lecture must be a ObjectId'),
  groups: Joi.array().items(
      Joi.objectId().message('Group must be a ObjectId')
    ).unique(),
  start: Joi.date(),
  end: Joi.date(),
});


module.exports = {
  saveRegister(req, res, next){
    // If one of field is empty get error
    if(validationUtil.allValidation(req, res, validationSchema, {presence: 'required'}))
        next();
  },

  updateRegister(req, res, next){
    
    if(empty(req.body)){
      return res.status('400').json({errors:['No data']});
    }
  
    if(validationUtil.allValidation(req, res, validationSchema))
        next();
  }
}