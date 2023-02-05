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
    const { email, password } = req.body;
    const user = await Users.findOne({ email });
    // USER ID
    const id = user._id;
    if (email !== user.email) {
      throw new AuthError({ msg: "email_wrong" });
    }
    if (password != user.password) {
      throw new AuthError({ msg: "password_wrong" });
    }

    jwt.verify(token, process.env.ACCESS_SECRET, async (err) => {
      if (err) {
        throw new AuthError({ msg: "auth_error" });
      } else {
        // CREATE NEW REFRESH TOKEN
        const refresh_token = jwt.sign(
          { email, id },
          process.env.REFRESH_SECRET
        );
        // UPDATE USER WITH REFRESH TOKEN
        await Users.findOneAndUpdate({ email }, { refresh_token });
      }
    });
    next();
  } catch (error) {
    console.log(error.errors);
    throw new AuthError({ msg: "auth_error" });
  }
};

module.exports = auth;
