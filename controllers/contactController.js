const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");

// asyncHandler is a way to replace the try-catch block for async operations, whenever it faces an error it redirects back to the errorHandler

// @description Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// @description Get individual contact
// @route GET /api/contacts/:id
// @access public

const getContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Get contact | ${req.params.id}` });
});

// @description Create contact
// @route POST /api/contacts
// @access public

const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are required");
    }
    // Actually creating the contact into the database having that schema alongside
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json(contact);
});

// @description Update contact
// @route PUT /api/contacts
// @access public

const updateContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update contact | ${req.params.id}` });
});

// @description Delete contact
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete contact | ${req.params.id}` });
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };