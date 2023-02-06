const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const { AuthError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthError({ msg: "auth_error" });
  }

  const token = authHeader.split(" ")[1];
  try {
    // VERIFY ACCESS TOKEN
    jwt.verify(token, process.env.ACCESS_SECRET, (err) => {
      if (!err) {
        next();
      } else {
        res.status(401).json({ msg: "login_required" });
      }
    });
  } catch (error) {
    console.log(error);
    throw new AuthError("login_error");
  }
};

module.exports = auth;
