const Users = require("../models/users");
const createAccessToken = require("./createAccessToken");
const createRefreshToken = require("./createRefreshToken");

const login = async (req, res) => {
  try {
    // GET BODY
    const { email } = req.body;
    // GET USER
    const user = await Users.findOne({ email });
    // USER ID
    const id = user._id;
    // CREATE ACCESS TOKEN
    const access_token = createAccessToken(email, id);
    // CREATE NEW REFRESH TOKEN
    const refresh_token = createRefreshToken(email, id);
    // UPDATE USER WITH REFRESH TOKEN
    await user.update({ refresh_token });
    // RES ACCESS TOKEN TO CLIENT
    res
      .status(200)
      .json({ msg: "tokens_created", access_token, refresh_token });
  } catch (error) {
    res.status(403).json({ msg: req.user });
  }
};

module.exports = login;
