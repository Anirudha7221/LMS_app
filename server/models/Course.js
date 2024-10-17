const Course = ()=> ({
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
module.exports = Course;