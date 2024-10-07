const express = require('express')

const cors = require('cors');

const connectDB = require('./dataBase');

const Admin = require('./models/Admin');
const Instructor = require('./models/Instructor');
const Student = require('./models/Student');

const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');
const saltround=10;

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post('/register',async(req, res)=>{

    const {email, password, userType} = req.body;

    try {
        const hashedPassword= await bcrypt.hash(password, saltround);

        let user;

        if(userType === 'Admin'){
            user = new Admin({username: email, password: hashedPassword});
        }
        else if(userType === 'Instructor'){
            user = new Instructor({username: email, password: hashedPassword});
        }
        else if(userType === 'Student'){
            user = new Student({username: email, password: hashedPassword});
        }

        user= await user.save();

        return res.status(200).json();
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
            return res.status(200).json();
        }
        else{
            return res.status(401).send("Wrong Password");
        }
    } catch (error) {
        return res.status(404).json();
    }
})

app.post('/reset-password', async(req, res)=>{

    const {email, newPassword, userType}= req.body;

    try {
         let user;

         if(userType === 'Admin'){
            user = await Admin.findOne({username: email});
         }
         else if(userType === 'Instructor'){
            user = await Instructor.findOne({username: email});
         }
         else if(userType === 'Student'){
            user = await Student.findOne({username: email});
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