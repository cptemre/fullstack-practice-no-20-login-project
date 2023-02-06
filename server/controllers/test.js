const Users = require("../models/users");
const createAccessToken = require("./createAccessToken");
const createRefreshToken = require("./createRefreshToken");

const test = async (req, res) => {
  try {
    res.status(200).json({ msg: "test", token: req.tokens.access_token });
  } catch (error) {
    res.status(403).json({ msg: "not ok" });
  }
};

module.exports = test;
