const mongoose = require('mongoose');
const course = require('./Course');

const instructorSchema = new mongoose.Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, default: 'Instructor_data'},
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref : 'Course',
          required: false
        }
     ]
});

const itemModel = mongoose.model(`Instructor_data`,instructorSchema);

module.exports = itemModel;