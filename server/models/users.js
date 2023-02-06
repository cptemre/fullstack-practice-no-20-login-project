const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: [true, "EMAIL EXISTS"],
    required: [true, "EMAIL IS REQUIRED"],
    minLength: [7, "EMAIL MUST CONTAIN AT LEAST 7 CHARACTERS"],
    maxLength: [40, "EMAIL MUST CONTAIN MAX 40 CHARACTERS"],
  },
  password: {
    type: String,
    trim: true,
    required: [true, "PASSWORD IS REQUIRED"],
    minLength: [7, "PASSWORD MUST CONTAIN AT LEAST 7 CHARACTERS"],
    maxLength: [40, "PASSWORD MUST CONTAIN MAX 40 CHARACTERS"],
  },
});

module.exports = mongoose.model("Users", Users);
