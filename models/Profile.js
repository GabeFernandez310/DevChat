/*HOLDS MODEL FOR USER PROFILE INFO*/

//imports
const mongoose = require("mongoose");

var schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

var Profile = mongoose.model("profile", schema);

module.exports = Profile;
