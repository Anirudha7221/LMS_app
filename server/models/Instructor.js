const mongoose = require('mongoose');
// const courses = require('./Course');

const instructorSchema = new mongoose.Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, default: 'Instructor_data'},
    // courses: [{courses}],
});

const itemModel = mongoose.model(`Instructor_data`,instructorSchema);

module.exports = itemModel;