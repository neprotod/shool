const Lecture = require('../models/lecture');

module.exports = {
  /**
   * Save the lecture
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveLecture(req, res, next){
    try{
      const result = await Lecture.saveLecture(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This lecture already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the lecture
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateLecture(req, res, next){
    try{
      const { id } = req.params;
      const result = await Lecture.updateLecture(id, req.body);
  
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
  async deleteLecture(req, res){
    const result = await Lecture.deleteLecture(id);
    res.status(200).json(result);
  },
  /**
   * Get one lecture
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getLectureById(req, res){
    const { id } = req.params;
    const result = await Lecture.getLectureById(id);
    res.status(200).json(result);
  },
  /**
   * Get all lectures
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getLectures(req, res){
    const result = await Lecture.getLectures();
    res.status(200).json(result);
  }
};