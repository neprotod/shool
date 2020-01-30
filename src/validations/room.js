const Joi = require('@hapi/joi');
const validationUtil = require('../utils/validation');
const empty = require('is-empty');

// Schema validation
const validationSchema = Joi.object({
  number: Joi.number()
});


module.exports = {
  saveRoom(req, res, next){
    // If one of field is empty get error
    if(validationUtil.allValidation(req, res, validationSchema, {presence: 'required'}))
        next();
  },

  updateRoom(req, res, next){
    
    if(empty(req.body)){
      return res.status('400').json({errors:['No data']});
    }
  
    if(validationUtil.allValidation(req, res, validationSchema))
        next();
  }
}