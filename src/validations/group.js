const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi)
const validationUtil = require('../utils/validation');
const empty = require('is-empty');

// Schema validation
const validationSchema = Joi.object({
  title: Joi.string(),
  students: Joi.array().items(
      Joi.objectId().message('Student must be a ObjectId')
    ).unique()
});


module.exports = {
  saveGroup(req, res, next){
    // If one of field is empty get error
    if(validationUtil.allValidation(req, res, validationSchema, {presence: 'required'}))
        next();
  },

  updateGroup(req, res, next){
    
    if(empty(req.body)){
      return res.status('400').json({errors:['No data']});
    }
  
    if(validationUtil.allValidation(req, res, validationSchema))
        next();
  }
}