const Group = require('../models/group');

module.exports = {
  /**
   * Save the Group
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveGroup(req, res, next){
    try{
      const result = await Group.saveGroup(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This Group already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the Group
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateGroup(req, res, next){
    try{
      const { id } = req.params;
      const result = await Group.updateGroup(id, req.body);
  
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
  async deleteGroup(req, res){
    const result = await Group.deleteGroup(id);
    res.status(200).json(result);
  },
  /**
   * Get one Group
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getGroupById(req, res){
    const { id } = req.params;
    const result = await Group.getGroupById(id);
    res.status(200).json(result);
  },
  /**
   * Get all Groups
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getGroups(req, res){
    const result = await Group.getGroups();
    res.status(200).json(result);
  }
};