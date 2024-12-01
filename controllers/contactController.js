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
    // Finding the contact by the id
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
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
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        // Passing the query to flag itself as new one
        { new: true },
    );
    res.status(200).json(updatedContact);
});

// @description Delete contact
// @route DELETE /api/contacts
// @access public

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };