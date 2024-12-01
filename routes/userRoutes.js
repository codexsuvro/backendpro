const express = require('express');
const router = express.Router();

// To register a new user
router.post("/register", (req, res) => {
    res.json({ message: "Register user" });
});

// For login purpose
router.post("/login", (req, res) => {
    res.json({ message: "Login user" });
});

// To get the current user
router.post("/current", (req, res) => {
    res.json({ message: "Current user" });
});

module.exports = router;