const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const roomSchema = new Schema({
  number: {
      type: Number,
      unique: true,
      required: true
  }
});

const Room = mongoose.model('rooms', roomSchema);

module.exports = {
  async testUniq(data){
    const test = await Room.find({number : data.number}); 
    if(test.length !== 0){
      const err = new Error('This room already exist');
      err.code = 11000;
      throw err;
    }
  },
  /**
   * Save the Room
   * 
   * @param  {{}} data 
   * @return {{}} this Room
   */
  async saveRoom(data){
    // TODO: I don't understand why unique number don't work.
    // Create crutch to fix problem unique
    await this.testUniq(data);

    const room = new Room(data);
    return await room.save();
  },
  /**
   * Update the Room
   * 
   * @param  {{}} data 
   * @return {{}} this Room
   */
  async updateRoom(id, data){
    // Create crutch to fix problem unique
    await this.testUniq(data);
    
    return await Room.findOneAndUpdate(id, data);
  },
  
  /**
   * Delete one Room by id
   * 
   * @param {Number} id 
   */
  async deleteRoom(id){
    return await Room.findByIdAndDelete(id);
  },

  /**
   * Get one Room by id
   * 
   * @param {Number} id 
   */
  async getRoomById(id){
    return await Room.findById(id);
  },

  /**
   * Get all Rooms
   */
  async getRooms(){
    return await Room.find();
  }
}