const validator = require("validator");
const Users = require("../models/users");
const badrequestError = require("./badRequest");
const jwt = require('jsonwebtoken');

// CHECK IF THE EMAIL EXISTS. IF NOT CREATE THE USER
const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await Users.find({ email });
    if (users.length) {
      res.json({ msg: "user_exists" });
    } else {
      if (validator.isEmail(email)) {
        await Users.create({ email, password });
        const user = await Users.findOne({ email })
        console.log(user._id);
        res.json({ msg: "user_created" });
      }
      res.json({ msg: "address_error" });
    }
  } catch (error) {
    badrequestError(error);
  }
};

module.exports = sigin;
