const express = require('express');
const config = require('./config');

const app = express();



app.listen(config.PORT, () => {
  console.log(`Server is starting on port ${config.PORT}`);
});