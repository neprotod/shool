const Room = require('../models/room');

module.exports = {
  /**
   * Save the Room
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveRoom(req, res, next){
    try{
      const result = await Room.saveRoom(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This Room already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the Room
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateRoom(req, res, next){
    try{
      const { id } = req.params;
      const result = await Room.updateRoom(id, req.body);
  
      res.status(201).json(result);
    }catch(e){
      
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This room already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Drop lection
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async deleteRoom(req, res){
    const result = await Room.deleteRoom(id);
    res.status(200).json(result);
  },
  /**
   * Get one Room
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getRoomById(req, res){
    const { id } = req.params;
    const result = await Room.getRoomById(id);
    res.status(200).json(result);
  },
  /**
   * Get all Rooms
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getRooms(req, res){
    const result = await Room.getRooms();
    res.status(200).json(result);
  }
};