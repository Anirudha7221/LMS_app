const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
        id: Number,
        title: String,
        category: String,
        description: String,
        duration: String,
        image: String,
        assignment:{
          title:String,
          Name: String,
          dueDate:String
  
        }
})

const itemModel = mongoose.model('courses', courseSchema);

module.exports =itemModel;