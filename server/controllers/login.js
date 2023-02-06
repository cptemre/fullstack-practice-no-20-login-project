const Users = require("../models/users");
const createAccessToken = require("./createAccessToken");
const { AuthError, BadRequest } = require("../errors");

const login = async (req, res) => {
  try {
    // GET BODY
    const { email, password } = req.body;
    // GET USER
    const user = await Users.findOne({ email });
    // CHECK EMAIL AND PASSWORD
    if (email !== user.email) {
      throw new AuthError("WRONG EMAIL");
    }
    if (password != user.password) {
      throw new AuthError("WRONG PASSWORD");
    }
    // USER ID
    const id = user._id;
    // CREATE ACCESS TOKEN
    const access_token = createAccessToken(email, id);
    // RES ACCESS TOKEN TO CLIENT
    res
      .status(200)
      .json({ msg: "SUCCESSFULLY LOGGED IN", token: access_token });
  } catch (error) {
    console.log(error);
    throw new BadRequest("LOGIN FAILED");
  }
};

module.exports = login;
