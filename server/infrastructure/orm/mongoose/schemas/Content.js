const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

const contentSchema = new mongoose.Schema({
  type: String,
  content: String,
  belongsTo: {
    type: Schema.Types.ObjectId,
    ref: "Project"
  }
});

module.exports = mongoose.model('Content', contentSchema);
