/*CREATE CONNECTION TO MONGODB DATABASE*/

const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB...");
  } catch (error) {
    console.error(error.message);
    //Exit application back-end if you can't connect to database
    process.exit(1);
  }
};

module.exports = connectDB;
