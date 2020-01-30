const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const validationUtil = require('../utils/validation');
const empty = require('is-empty');

// Schema validation
const validationSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  duration: Joi.number()
});


module.exports = {
  saveLecture(req, res, next){
    // If one of field is empty get error
    if(validationUtil.allValidation(req, res, validationSchema, {presence: 'required'}))
        next();
  },

  updateLecture(req, res, next){
    
    if(empty(req.body)){
      return res.status('400').json({errors:['No data']});
    }
  
    if(validationUtil.allValidation(req, res, validationSchema))
        next();
  }
}