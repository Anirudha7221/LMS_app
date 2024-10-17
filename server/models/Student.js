const mongoose = require('mongoose');
const course = require('./Course');

const studentSchema = new mongoose.Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, default: 'Student_data'},
    courses: {course},
});

const itemModel = mongoose.model(`Student_data`,studentSchema);

module.exports = itemModel;