// @description Get all contacts
// @route GET /api/contacts
// @access public

const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
}

// @description Get individual contact
// @route GET /api/contacts/:id
// @access public

const getContact = (req, res) => {
    res.status(200).json({message: `Get contact | ${req.params.id}`});
}

// @description Create contact
// @route POST /api/contacts
// @access public

const createContact = (req, res) => {
    res.status(201).json({message: "Create contact"});
}

// @description Update contact
// @route PUT /api/contacts
// @access public

const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact | ${req.params.id}`});
}

// @description Delete contact
// @route DELETE /api/contacts
// @access public

const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact | ${req.params.id}`});
}

module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };