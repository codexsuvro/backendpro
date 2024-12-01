const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// @description Register new user
// @route POST /api/users/register
// @access public
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    // Checking if the user is already registered
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already registered");
    }
    // Hashpassword registration
    const hasedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password: hasedPassword,
    });
    if (user) {
        res.status(201).json({ _id: user._id, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
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