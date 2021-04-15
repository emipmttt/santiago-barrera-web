const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  role: String,
  date: Number,
  url: String,
  content: [{
    type: Schema.Types.ObjectId,
    ref: 'Content'
  }]
});

module.exports = mongoose.model('Project', projectSchema);
