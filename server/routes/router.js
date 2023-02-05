const express = require("express");
const router = express.Router();

// CONTROL
const signin = require("../controls/signin");
const login = require("../controls/login");
// AUTH
const auth = require("../middleware/auth");

router.route("/signin").post(signin);
router.route("/login").get(auth, login);

module.exports = router;
