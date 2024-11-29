const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`Database connected | ${connect.connection.host} | ${connect.connection.name}`);
    } catch (error) {
        console.log(error);
        // If it faces any error, it'll exit with the value 1
        process.exit(1);
    }
}

module.exports = connectDb;