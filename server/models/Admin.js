const mongoose = require('mongoose');
const course = require('./Course');

const adminSchema = new mongoose.Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, default: 'Admin_data', required: true},
    courses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref : 'Course',
          required: false
        }
     ]
});

const itemModel = mongoose.model(`Admin_data`,adminSchema);

module.exports = itemModel;