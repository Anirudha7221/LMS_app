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
      category: 'popular',
      description: 'Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React, MongoDB, Prisma, Deployment etc',
      duration: '10 hours',
      image: 'https://www.achieversit.com/management/uploads/course_image/web-dev-img1.jpeg',
      assignment:{
        title:'Assignment 1',
        assignmentName: "Build a  todo app",
        dueDate:'2024-10-25'

      }
    },
    {
      id: 2,
      title: 'Modern React with Redux [2024 Update]',
      category: 'new',
      description: 'Master React and Redux. Apply modern design patterns to build apps with React Router, TailwindCSS, Context, and Hooks!.',
      duration: '10 hours',
      image: 'https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/a0506c47cdce.jpg',
      assignment:{
        title:'Assignment 1',
        assignmentName: "Build a  todo app",
        dueDate:'2024-10-25'

      }
    },
    {
        id: 3,
        title: 'Master Microservices with Spring Boot and Spring Cloud',
        category: 'new',
        description: 'Java Spring Boot Microservices 5-in-1 - Spring Boot, Spring Cloud, Docker, Kubernetes and REST API (REST Web Services)',
        duration: '10 hours',
        image: 'https://pic.rutube.ru/playlist/32ce9e35-6710-11ef-9430-02420a000b08.jpg',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

         }
      },
      {
        id: 4,
        title: 'Python and Django Full Stack Web Developer Bootcamp',
        category: 'recommended',
        description: 'Learn to build websites with HTML , CSS , Bootstrap , Javascript , jQuery , Python 3 , and Django',
        duration: '10 hours',
        image: 'https://img.damasgate.com/DamasPIC/old/001a/112018vb5001/fync379t1hq0zh29os6t.jpg',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        }
      },
      {
        id: 5,
        title: 'The Complete ASP.NET MVC 5 Course',
        category: 'recommended',
        description: 'Learn to build fast and secure web applications with ASP.NET MVC 5 - The most popular course with 40,000+ students!',
        duration: '10 hours',
        image: 'https://media.licdn.com/dms/image/C5612AQGwmcNJy9ZN2g/article-cover_image-shrink_600_2000/0/1520170546590?e=2147483647&v=beta&t=GaFdCLS3IbJD2NPiFna9C89fTOl_lxz6IURUpla9atU',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        },
      },
      {
        id: 6,
        title: 'Learn and Understand NodeJS',
        category: 'popular',
        description: 'Dive deep under the hood of NodeJS. Learn V8, Express, the MEAN stack, core Javascript concepts, and more',
        duration: '10 hours',
        image: 'https://media.licdn.com/dms/image/D4D12AQEmvLwNsHsxNQ/article-cover_image-shrink_720_1280/0/1715925650650?e=2147483647&v=beta&t=NR2z2AC1Hp06qyqt7pogJNeWCRWdeQ6bXzV4lMOjS4g',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        }
      },
      {
        id: 7,
        title: 'Docker & Kubernetes: The Practical Guide [2024 Edition]',
        category: 'new',
        description: 'Learn Docker, Docker Compose, Multi-Container Projects, Deployment and all about Kubernetes from the ground up!',
        duration: '10 hours',
        image: 'https://miro.medium.com/v2/resize:fit:980/0*E0Naiu0Tn47fFRxB.jpg',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        }
      },
      {
        id: 8,
        title: 'Ethereum and Solidity: The Complete Developers Guid',
        category: 'recommended',
        description: 'Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain',
        duration: '10 hours',
        image: 'https://www.immunebytes.com/blog/wp-content/uploads/2023/03/Smart-Contract-Deployment-on-Ethereum-The-Complete-Guide-compressed.png',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        }
      },
      {
        id: 9,
        title: 'Python for beginners',
        category: 'popular',
        description: 'Master the fundamentals of Python while working on various usecases in easy steps',
        duration: '10 hours',
        image: 'https://media.licdn.com/dms/image/D4D12AQEJRC06LRk6bg/article-cover_image-shrink_600_2000/0/1684758587889?e=2147483647&v=beta&t=tSnmznAGjqmS6cgBwUBzMwDBl3kXhCW1TNwallbR__g',
        assignment:{
          title:'Assignment 1',
          assignmentName: "Build a  todo app",
          dueDate:'2024-10-25'
  
        }
      },
      {
        id: 10,
        title: 'Become a WordPress Developer: Unlocking Power With Code',
        category: 'popular',
        description: 'Learn PHP, JavaScript, WordPress theming &amp; the WP REST API to Create Custom &amp; Interactive WordPress Websites',
        duration: '10 hours',
        image: 'https://media.geeksforgeeks.org/wp-content/uploads/20240521100552/Roadmap-for-WordPress-Developer-copy.webp',
        assignment:{
            title:'Assignment 1',
            assignmentName: "Build a  todo app",
            dueDate:'2024-10-25'

        }
      },
  ];

  
app.get('/allCourses', (req, res)=>{
    res.json(courses);
});

app.get('/dashboard/courses', (req, res)=>{
    res.json(courses);
});

app.get('/dashboard/assignments', (req, res)=>{
    res.json(courses);
});

app.get('/dashboard/annoucements', (req, res)=>{
    res.json(courses);
});

app.get('/assignments', (req, res)=>{
    res.json(courses);
});

app.get('/announcements', (req, res)=>{
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