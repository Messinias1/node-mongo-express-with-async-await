// To work with MongoDB, we need to define the shape of our data (the Schema), connect to the database, run our query and then close the connection

// We use mongoose.Schema and pass an object for each field in our table
// We define the type of each field using built in JavaScript types
// We specify if the field is required, and the error to provide if the field is not provided
// We export the schema so it can be used later

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    created: {
        type: Date,
        required: [true, 'Created date is required']
    }
})

module.exports = userSchema