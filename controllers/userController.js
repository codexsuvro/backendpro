const asyncHandler = require("express-async-handler");

// @description Register new user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Register user" });
});

// @description Login user
// @route POST /api/users/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Login user" });
});

// @description Get current user
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Current user" });
});

module.exports = { registerUser, loginUser, currentUser };