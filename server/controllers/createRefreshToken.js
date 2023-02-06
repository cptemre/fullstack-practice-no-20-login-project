const jwt = require("jsonwebtoken");

const refreshToken = (email, id) => {
  // CREATE ACCESS TOKEN
  return jwt.sign({ email, id }, process.env.REFRESH_SECRET, {
    expiresIn: "30d",
  });
};
module.exports = refreshToken;
