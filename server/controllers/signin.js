const validator = require("validator");
const Users = require("../models/users");
const { BadRequest } = require("../errors");
// CHECK IF THE EMAIL EXISTS. IF NOT CREATE THE USER
const sigin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await Users.find({ email });
    if (users.length) {
      res.status(200).json({ msg: "USER ALREADY EXISTS" });
    } else {
      if (validator.isEmail(email)) {
        // CREATE USER
        await Users.create({ email, password });
        // SEND ACCESS TOKEN TO THE CLIENT
        res.status(200).json({ msg: "USER CREATED" });
      }
      res.status(400).json({ msg: "ADDRESS IS NOT VALID" });
    }
  } catch (error) {
    if (error.name === "ValidationError" && error.errors["password"]) {
      throw new BadRequest(error.errors["password"]);
    }
  }
};

module.exports = sigin;
