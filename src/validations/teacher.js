const Joi = require('@hapi/joi');
const validationUtil = require('../utils/validation');
const empty = require('is-empty');

// Schema validation
const validationSchema = Joi.object({
  name: Joi.string(),
  lastName: Joi.string()
});


module.exports = {
  saveTeacher(req, res, next){
    // If one of field is empty get error
    if(validationUtil.allValidation(req, res, validationSchema, {presence: 'required'}))
        next();
  },

  updateTeacher(req, res, next){
    
    if(empty(req.body)){
      return res.status('400').json({errors:['No data']});
    }
  
    if(validationUtil.allValidation(req, res, validationSchema))
        next();
  }
}