const Users = require("../models/users");
const createAccessToken = require("../controllers/createAccessToken");
const createRefreshToken = require("../controllers/createRefreshToken");
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
      const refresh_token = createRefreshToken(email, id);
      // GET USER AND UPDATE
      await Users.findOneAndUpdate({ email }, { refresh_token });
      // SET TOKENS IN REQUEST OBJECT
      req.tokens = { access_token, refresh_token };
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = generateToken;
