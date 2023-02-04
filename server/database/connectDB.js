const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  console.log("DATABASE CONNECTED");
};

module.exports = connectDB;
