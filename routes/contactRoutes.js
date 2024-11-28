const express = require('express');
const router = express.Router();

// To get all the contacts
router.route("/").get((req, res) => {
    res.status(200).json({message: "Get all contacts"});
});

// To get individual contact
router.route("/:id").get((req, res) => {
    res.status(200).json({message: `Get contact | ${req.params.id}`});
});

// To create new contact
router.route("/").post((req, res) => {
    res.status(200).json({message: "Create contact"});
});

// To update contact
router.route("/:id").put((req, res) => {
    res.status(200).json({message: `Update contact | ${req.params.id}`});
});

// To delete contact
router.route("/:id").delete((req, res) => {
    res.status(200).json({message: `Delete contact | ${req.params.id}`});
});

module.exports = router;