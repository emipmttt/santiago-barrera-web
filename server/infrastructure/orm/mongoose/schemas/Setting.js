const mongoose = require("../mongoose");

const schema = new mongoose.Schema({
  availableToWork: Boolean,
  words: [String],
});

module.exports = mongoose.model('Settings', schema);
