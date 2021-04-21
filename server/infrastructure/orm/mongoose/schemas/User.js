const mongoose = require("../mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  active: {
    type: Boolean,
    default: false
  },
  type: Number
});

module.exports = mongoose.model('User', userSchema);
