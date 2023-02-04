const mongoose = require("mongoose");

const Users = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: [true, "unique_error"],
    required: [true, "required_error"],
    minLength: [7, "email_min_error"],
    maxLength: [50, "email_max_error"],
  },
  password: {
    type: String,
    trim: true,
    minLength: [7, "password_min_error"],
    maxLength: [40, "password_max_error"],
  },
});

module.exports = mongoose.model("Users", Users);
