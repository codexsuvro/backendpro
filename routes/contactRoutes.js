const express = require('express');
const router = express.Router();
const { getContacts, getContact, createContact, updateContact, deleteContact } = require("../controllers/contactController");

// To get all the contacts and create new contact
router.route("/").get(getContacts).post(createContact);

// To get individual contact, update contact, and delete contact
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;