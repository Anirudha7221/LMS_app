const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {type: Number, required: true},
  title: {type: String, required: true},
  category: {type: String},
  description: {type: String},
  duration: {type: String},
  image: {type: String, required: true},
  assignment:{
    title:{type: String},
    Name: {type: String},
    dueDate:{type: String}

  }
})

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;