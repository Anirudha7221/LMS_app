const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: String,
    password: String,
    userType: String
});

const itemModel = mongoose.model(`Admin_data`,User);

module.exports = itemModel;