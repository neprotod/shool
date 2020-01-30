const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },    
    lastName: {
        type: String,
        required: true
    },
  });

  const Teacher = mongoose.model('teachers', teacherSchema);


  module.exports = {
    /**
     * Save the teacher
     * 
     * @param  {{}} data 
     * @return {{}} this teacher
     */
    async saveTeacher(data){
      const teacher = new Teacher(data);
      return await teacher.save();
    },
    /**
     * Update the teacher
     * 
     * @param  {{}} data 
     * @return {{}} this teacher
     */
    async updateTeacher(id, data){
      return await Teacher.findOneAndUpdate(id, data);
    },
    
    /**
     * Delete one teacher by id
     * 
     * @param {Number} id 
     */
    async deleteTeacher(id){
      return await Teacher.findByIdAndDelete(id);
    },

    /**
     * Get one teacher by id
     * 
     * @param {Number} id 
     */
    async getTeacherById(id){
      return await Teacher.findById(id);
    },

    /**
     * Get all teachers
     */
    async getTeachers(){
      return await Teacher.find();
    }
  }