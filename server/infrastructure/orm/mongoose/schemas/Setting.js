const mongoose = require("../mongoose");

const schema = new mongoose.Schema({
  availableToWork: Boolean,
  words: [{
    type: String
  }],
});

module.exports = mongoose.model('Settings', schema);
