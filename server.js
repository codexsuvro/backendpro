const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const dotenv = require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// Accessing body parser to to receive the response body from client side
app.use(express.json());

app.use("/api/contacts", require('./routes/contactRoutes'));

// To transform the empty response body into a formatted message [ Always place this at last of all the routes ]
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server connected | ${port}`);
});
