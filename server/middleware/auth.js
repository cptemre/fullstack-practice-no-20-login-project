const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const { AuthError } = require("../errors");

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthError("AUTHORIZATION ERROR");
  }

  const token = authHeader.split(" ")[1];
  try {
    // VERIFY ACCESS TOKEN
    jwt.verify(token, process.env.ACCESS_SECRET, (err) => {
      if (!err) {
        const { email } = jwt.decode(token, process.env.ACCESS_SECRET)
        req.user = email
        next();
      } else {
        res.status(401).json("LOGIN REQUIRED");
      }
    });
  } catch (error) {
    console.log(error);
    throw new AuthError("LOGIN FAILED");
  }
};

module.exports = auth;
