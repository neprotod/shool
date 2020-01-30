const mongoose = require('mongoose');
require('./teacher');
require('./room');
require('./group');
require('./lecture');
const Schema = mongoose.Schema;


const registerSchema = new Schema({
  room: [{
    type: mongoose.Types.ObjectId,
    ref: "rooms"
  }],
  teacher: [{
    type: mongoose.Types.ObjectId,
    ref: "teachers"
  }],
  lecture: [{
    type: mongoose.Types.ObjectId,
    ref: "lectures"
  }],
  groups: [{
    type: mongoose.Types.ObjectId,
    ref: 'groups'
  }],
  start: Date,
  end: Date
});

  const Register = mongoose.model('registers', registerSchema);

  module.exports = {
    /**
     * Save the Register
     * 
     * @param  {{}} data 
     * @return {{}} this Register
     */
    async saveRegister(data){
      const register = new Register(data);
      return await register.save();
    },
    /**
     * Update the Register
     * 
     * @param  {{}} data 
     * @return {{}} this Register
     */
    async updateRegister(id, data){
      return await Register.findOneAndUpdate(id, data);
    },
    
    /**
     * Delete one Register by id
     * 
     * @param {Number} id 
     */
    async deleteRegister(id){
      return await Register.findByIdAndDelete(id);
    },

    /**
     * Get one Register by id
     * 
     * @param {Number} id 
     */
    async getRegisterById(id){
      return await Register.findById(id).populate('students').populate({
        path: 'groups',
        populate: {
          path: 'students'
        }
      })
      .populate('room')
      .populate('teacher')
      .populate('lecture');
    },

    /**
     * Get all Registers
     */
    async getRegisters(){
      return await Register.find().populate({
        path: 'groups',
        populate: {
          path: 'students'
        }
      })
      .populate('room')
      .populate('teacher')
      .populate('lecture');
    }
  }