const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();

// Connect the mongoDb accessibility with mongoose
connectDb();

const app = express();

const port = process.env.PORT || 5000;

// Accessing body parser to to receive the response body from client side
app.use(express.json());

// Accessing the contact information
app.use("/api/contacts", require('./routes/contactRoutes'));

// Accessing user information
app.use("/api/users", require('./routes/userRoutes'));

// To transform the empty response body into a formatted message [ Always place this at last of all the routes ]
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server connected | ${port}`);
});
