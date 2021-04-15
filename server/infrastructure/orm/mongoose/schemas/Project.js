const mongoose = require("../mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  role: String,
  date: Number,
  url: String,
  content: Array
});

module.exports = mongoose.model('Project', projectSchema);
