const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    username: {type: String, required: false, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    userType: {type: String, default: 'Student_data'},
    courses: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref : 'Course',
         required: false
       }
    ]
});

const itemModel = mongoose.model('Student_data',studentSchema);

module.exports = itemModel;