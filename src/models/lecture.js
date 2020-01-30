const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const lectureSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    }
  },
  {timestamps: true});

  const Lecture = mongoose.model('lectures', lectureSchema);

  module.exports = {
    /**
     * Save the lecture
     * 
     * @param  {{}} data 
     * @return {{}} this lecture
     */
    async saveLecture(data){
      const lecture = new Lecture(data);
      return await lecture.save();
    },
    /**
     * Update the lecture
     * 
     * @param  {{}} data 
     * @return {{}} this lecture
     */
    async updateLecture(id, data){
      return await Lecture.findOneAndUpdate(id, data);
    },
    
    /**
     * Delete one lecture by id
     * 
     * @param {Number} id 
     */
    async deleteLecture(id){
      return await Lecture.findByIdAndDelete(id);
    },

    /**
     * Get one lecture by id
     * 
     * @param {Number} id 
     */
    async getLectureById(id){
      return await Lecture.findById(id);
    },

    /**
     * Get all lectures
     */
    async getLectures(){
      return await Lecture.find();
    }
  }