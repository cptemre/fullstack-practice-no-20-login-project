const jwt = require("jsonwebtoken");

const accessToken = (email, id) => {
  // CREATE ACCESS TOKEN
  return jwt.sign({ email, id }, process.env.ACCESS_SECRET, {
    expiresIn: "60s",
  });
};
module.exports = accessToken;
