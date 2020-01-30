const Teacher = require('../models/teacher');

module.exports = {
  /**
   * Save the Teacher
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveTeacher(req, res, next){
    try{
      const result = await Teacher.saveTeacher(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This Teacher already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the Teacher
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateTeacher(req, res, next){
    try{
      const { id } = req.params;
      const result = await Teacher.updateTeacher(id, req.body);
  
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
  async deleteTeacher(req, res){
    const result = await Teacher.deleteTeacher(id);
    res.status(200).json(result);
  },
  /**
   * Get one Teacher
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getTeacherById(req, res){
    const { id } = req.params;
    const result = await Teacher.getTeacherById(id);
    res.status(200).json(result);
  },
  /**
   * Get all Teachers
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getTeachers(req, res){
    const result = await Teacher.getTeachers();
    res.status(200).json(result);
  }
};