const Student = require('../models/student');

module.exports = {
  /**
   * Save the Student
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async saveStudent(req, res, next){
    try{
      const result = await Student.saveStudent(req.body);
  
      res.status(201).json(result);
    }catch(e){
      console.error(e);
      
      //duplicate key
      if ( e.code === 11000 ) {
        return res.status(400).json({errors:['This Student already exist']});
      }

      next({errors:['Database is error']});
    }

  },
  /**
   * Update the Student
   * 
   * @param {*} req
   * @param {*} res 
   * @param {Function} next
   */
  async updateStudent(req, res, next){
    try{
      const { id } = req.params;
      const result = await Student.updateStudent(id, req.body);
  
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
  async deleteStudent(req, res){
    const result = await Student.deleteStudent(id);
    res.status(200).json(result);
  },
  /**
   * Get one Student
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getStudentById(req, res){
    const { id } = req.params;
    const result = await Student.getStudentById(id);
    res.status(200).json(result);
  },
  /**
   * Get all Students
   * 
   * @param {*} req 
   * @param {*} res 
   */
  async getStudents(req, res){
    const result = await Student.getStudents();
    res.status(200).json(result);
  }
};