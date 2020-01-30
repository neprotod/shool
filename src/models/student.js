const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },    
    lastName: {
        type: String,
        required: true
    },
  });

  const Student = mongoose.model('students', studentSchema);


  module.exports = {
    /**
     * Save the Student
     * 
     * @param  {{}} data 
     * @return {{}} this Student
     */
    async saveStudent(data){
      const student = new Student(data);
      return await student.save();
    },
    /**
     * Update the Student
     * 
     * @param  {{}} data 
     * @return {{}} this Student
     */
    async updateStudent(id, data){
      return await Student.findOneAndUpdate(id, data);
    },
    
    /**
     * Delete one Student by id
     * 
     * @param {Number} id 
     */
    async deleteStudent(id){
      return await Student.findByIdAndDelete(id);
    },

    /**
     * Get one Student by id
     * 
     * @param {Number} id 
     */
    async getStudentById(id){
      return await Student.findById(id);
    },

    /**
     * Get all Students
     */
    async getStudents(){
      return await Student.find();
    }
  }