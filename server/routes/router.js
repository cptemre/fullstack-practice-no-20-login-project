const express = require("express");
const router = express.Router();

// CONTROL
const signin = require("../controls/signin");
const login = require("../controls/login");

router.route("/login").get(login);
router.route("/signin").post(signin);

module.exports = router;
