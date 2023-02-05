const Users = require("../models/users");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    // GET BODY
    const { email, password } = req.body;
    // GET USER
    const user = await Users.findOne({ email });
    // USER ID
    const id = user._id
    // CREATE ACCESS TOKEN
    const access_token = jwt.sign({ email, id }, process.env.ACCESS_SECRET, {
      expiresIn: "15m",
    });
    // RES ACCESS TOKEN TO CLIENT
    res.status(200).json({msg: 'logged_in', access_token});
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
