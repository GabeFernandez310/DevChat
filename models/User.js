/*HOLDS MODEL FOR USER INFO*/

//imports
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateJoined: {
    type: Date,
    default: Date.now,
  },
  reputationVal: {
    type: Number,
  },
  avatar: {
    type: String,
  },
});

var User = mongoose.model("user", schema);

module.exports = User;
