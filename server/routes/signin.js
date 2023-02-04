const express = require("express");
const router = express.Router();

// CONTROL
const signin = require("../controls/signin");

router.route("/signin").post(signin);

module.exports = signin