const express = require('express')

const cors = require('cors');

const connectDB = require('./dataBase');

const Admin = require('./models/Admin');
const Instructor = require('./models/Instructor');
const Student = require('./models/Student');

const bcrypt = require('bcrypt');
const saltround=10;
const JWT = require('jsonwebtoken');
const auth = require('./auth');

const PORT = process.env.PORT || 8000;
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

const courses = [
    {
      id: 1,
      title: 'Complete web development course',
      description: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
      image: 'https://example.com/course-image-1.jpg',
    },
    {
      id: 2,
      title: 'Modern React with Redux [2024 Update]',
      description: 'Master React and Redux. Apply modern design patterns to build apps with React Router, TailwindCSS, Context, and Hooks!.',
      image: 'https://example.com/course-image-2.jpg',
    },
    {
        id: 3,
        title: 'Master Microservices with Spring Boot and Spring Cloud',
        description: 'Java Spring Boot Microservices 5-in-1 - Spring Boot, Spring Cloud, Docker, Kubernetes and REST API (REST Web Services)',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 4,
        title: 'Python and Django Full Stack Web Developer Bootcamp',
        description: 'Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 5,
        title: 'The Complete ASP.NET MVC 5 Course',
        description: 'Learn to build fast and secure web applications with ASP.NET MVC 5 - The most popular course with 40,000+ students!',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 6,
        title: 'Learn and Understand NodeJS',
        description: 'Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 7,
        title: 'Docker & Kubernetes: The Practical Guide [2024 Edition]',
        description: 'Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 8,
        title: 'Ethereum and Solidity: The Complete Developers Guid',
        description: 'Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 9,
        title: 'Python for beginners',
        description: 'Master the fundamentals of Python while working on various usecases in easy steps',
        image: 'https://example.com/course-image-2.jpg',
      },
      {
        id: 10,
        title: 'Become a WordPress Developer: Unlocking Power With Code',
        description: 'Learn PHP, JavaScript, WordPress theming &amp; the WP REST API to Create Custom &amp; Interactive WordPress Websites',
        image: 'https://example.com/course-image-2.jpg',
      },
  ];

  
app.get('/home/courses', (req, res)=>{
    res.json(courses);
});

app.post('/register',async(req, res)=>{

    const {name, email, password, userType} = req.body;

    try {
        const hashedPassword= await bcrypt.hash(password, saltround);

        let user;

        if(userType === 'Admin'){
            user = new Admin({username: name, email, password: hashedPassword});
        }
        else if(userType === 'Instructor'){
            user = new Instructor({username: name, email, password: hashedPassword});
        }
        else if(userType === 'Student'){
            user = new Student({username: name ,email, password: hashedPassword});
        }

        user= await user.save();

        const payload={
            user:{
                id: user.id,
                role: user.role
            },
        };

        JWT.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h'},
            (err, token)=>{
                if(err) throw err;
                res.json({token});
            }
        );

    } catch (error) {
        return res.status(404).json();
    }
})

app.post('/login',async(req, res)=>{

    const {username, password, userType}= req.body;

    try {
        let user;

        if(userType === 'Admin'){
            user = await Admin.findOne({username});
        }
        else if(userType === 'Instructor'){
            user = await Instructor.findOne({username});
        }
        else if(userType === 'Student'){
            user = await Student.findOne({username});
        }

        if(!user){
           return res.status(401).send('User not found');
        }
        
        const match = await bcrypt.compare(password, user.password);

        if(match){

            const payload={
                user:{
                    id: user.id,
                    role: user.role
                },
            };
    
            JWT.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: '1h'},
                (err, token)=>{
                    if(err) throw err;
                    res.json(user.username);
                }
            );
        }
        else{
            return res.status(401).send("Wrong Password");
        }
    } catch (error) {
        return res.status(404).json();
    }
})

app.post('/resetPass', async(req, res)=>{

    const {username, newPassword, userType}= req.body;

    try {
         let user;

         if(userType === 'Admin'){
            user = await Admin.findOne({username});
         }
         else if(userType === 'Instructor'){
            user = await Instructor.findOne({username});
         }
         else if(userType === 'Student'){
            user = await Student.findOne({username});
         }

        if(!user){
            return res.status(401).send('User not found please enter correct username');
        }

        const changePassword= await bcrypt.hash(newPassword, saltround);
        user.password=changePassword;

        user=await user.save();

        return res.status(200).send("Password changed Succesfully");

    } catch (error) {
        return res.status(404).json();
    }
})


app.listen(PORT, ()=>{
    console.log('app is running');
})