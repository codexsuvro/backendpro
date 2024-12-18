const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();

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
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    _id: user._id,
                },
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: "1h" },
        );
        res.status(200).json({ accessToken: accessToken });
    } else {
        res.status(401);
        throw new Error("Invalid email or password");
    }
});


// @description Get current user
// @route GET /api/users/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };