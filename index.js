const config = require('./config');
const app = require('./app');

app.listen(config.PORT, () => {
  console.log(`Server is starting on port ${config.PORT}`);
});