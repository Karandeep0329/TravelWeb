const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:String,
    email:String,
    subject: String, 
    message: String
});

module.exports = mongoose.model("UserInput",usersSchema);