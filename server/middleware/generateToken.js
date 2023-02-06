const Users = require("../models/users");
const createAccessToken = require("../controllers/createAccessToken");
const jwt = require("jsonwebtoken");

const generateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AuthError({ msg: "auth_error" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jwt.decode(token, process.env.ACCESS_SECRET, (err) => {
      if (err) {
        jwt.decode(token, process.env.REFRESH_SECRET);
      }
    });
    if (decode) {
      // DECODE EMAIL AND ID FROM TOKEN
      const { email, id } = decode;
      // CREATE NEW TOKENS
      const access_token = createAccessToken(email, id);
      // COOKIE SET
      res.cookie("token", access_token, { httpOnly: true });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateToken;
