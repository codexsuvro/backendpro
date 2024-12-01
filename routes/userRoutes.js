const express = require('express');
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController");

// To register a new user
router.route("/register").post(registerUser);

// For login purpose
router.route("/login").post(loginUser);

// To get the current user
router.route("/current").get(currentUser);

module.exports = router;