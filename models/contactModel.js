const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        // If the name is not provided, it'll throw an error
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        // If the email is not provided, it'll throw an error
        required: [true, "Email is required"],
    },
    phone: {
        type: String,
        // If the phone number is not provided, it'll throw an error
        required: [true, "Phone Number is required"],
    },
},
    {
        // Enabling timestamp automatically ensures the updateAt and createdAt fields in order to create or update any document in Db
        timestamps: true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);