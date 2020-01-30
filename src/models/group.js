const mongoose = require('mongoose');
require('./student');
const Schema = mongoose.Schema;


const groupSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    students: [{
      type: mongoose.Types.ObjectId,
      ref: 'students'
    }],
  });

  const Group = mongoose.model('groups', groupSchema);

  module.exports = {
    /**
     * Save the Group
     * 
     * @param  {{}} data 
     * @return {{}} this Group
     */
    async saveGroup(data){
      const group = new Group(data);
      return await group.save();
    },
    /**
     * Update the Group
     * 
     * @param  {{}} data 
     * @return {{}} this Group
     */
    async updateGroup(id, data){
      return await Group.findOneAndUpdate(id, data);
    },
    
    /**
     * Delete one Group by id
     * 
     * @param {Number} id 
     */
    async deleteGroup(id){
      return await Group.findByIdAndDelete(id);
    },

    /**
     * Get one Group by id
     * 
     * @param {Number} id 
     */
    async getGroupById(id){
      return await Group.findById(id).populate('students');
    },

    /**
     * Get all Groups
     */
    async getGroups(){
      return await Group.find().populate('students');
    }
  }