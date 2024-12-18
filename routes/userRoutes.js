const express = require('express');
const router = express.Router();
const { registerUser, loginUser, currentUser } = require("../controllers/userController");
const validateToken = require('../middleware/validateTokenHandler');

// To register a new user
router.post("/register", registerUser);

// For login purpose
router.post("/login", loginUser);

// To get the current user
router.get("/current", validateToken, currentUser);

module.exports = router;