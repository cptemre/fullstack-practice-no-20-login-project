const validator = require("validator");
const Users = require("../models/users");
const badrequestError = require("./badRequest");

// CHECK IF THE EMAIL EXISTS. IF NOT CREATE THE USER
const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await Users.find({ email });
    if (users.length) {
      res.status(200).json({ msg: "user_exists" });
    } else {
      if (validator.isEmail(email)) {
        // CREATE USER
        await Users.create({ email, password });
        // SEND ACCESS TOKEN TO THE CLIENT
        res.status(200).json({ msg: "user_created" });
      }
      res.status(400).json({ msg: "address_error" });
    }
  } catch (error) {
    badrequestError(error);
  }
};

module.exports = sigin;
