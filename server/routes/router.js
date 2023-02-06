const express = require("express");
const router = express.Router();

// CONTROL
const signin = require("../controllers/signin");
const login = require("../controllers/login");
const test = require("../controllers/test");
// AUTH
const auth = require("../middleware/auth");
const generateToken = require("../middleware/generateToken");

router.route("/signin").post(signin);
router.route("/login").get(login);
router.route("/test").get(auth, generateToken, test);

module.exports = router;
