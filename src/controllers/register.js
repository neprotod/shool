const Register = require('../models/register');

module.exports = {
  /**
   * Save the Register
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveRegister(req, res, next){
    try{
      const result = await Register.saveRegister(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This Register already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the Register
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateRegister(req, res, next){
    try{
      const { id } = req.params;
      const result = await Register.updateRegister(id, req.body);
  
      res.status(201).json(result);
    }catch(e){
      next({errors:['Database is error']});
    }

  },
  /**
   * Drop lection
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async deleteRegister(req, res){
    const result = await Register.deleteRegister(id);
    res.status(200).json(result);
  },
  /**
   * Get one Register
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getRegisterById(req, res){
    const { id } = req.params;
    const result = await Register.getRegisterById(id);
    res.status(200).json(result);
  },
  /**
   * Get all Registers
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getRegisters(req, res){
    const result = await Register.getRegisters();
    res.status(200).json(result);
  }
};