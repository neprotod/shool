const mongoose = require('mongoose');
const config = require('../../config');
module.exports = async () => {
  try{
      await mongoose.connect(config.connectionUrl, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useUnifiedTopology: true,
          useFindAndModify: false
      });

      console.log('MongoDB is connection');
  }catch(e){
      console.error(e);
  }
}
