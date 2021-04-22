const mongoose = require('mongoose');
const environment = require('../../config/environment');

mongoose.connect(environment.database.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

mongoose.connection.on('open', () => {
  console.log('connection open');
});

module.exports = mongoose;
