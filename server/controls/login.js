const Users = require("../models/users");
const jwt = require("jsonwebtoken");
const login = async (req, res) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new Error
    }

    const token = authHeader.split(' ')[1]

    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (
      user.email === email &&
      user.password === password &&
      email === decode.email &&
      user.id === decode.id
    ) {
      console.log('Okay');
    }
    
    console.log(decode);
    res.send(decode);
  } catch (error) {
    console.log(error);
  }
};

module.exports = login;
