const express = require('express')

const cors = require('cors');

const connectDB = require('./dataBase');

const User = require('./user')

const bcrypt = require('bcrypt');
const { use } = require('bcrypt/promises');
const saltround=10;

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.post('/register',async(req, res)=>{

    const {email, password, userType} = await req.body;

    try {
        const hashedPassword= await bcrypt.hash(password, saltround);

        let user= new User({username: email, password: hashedPassword, userType});

        user= await user.save();

        return res.status(200).json();
    } catch (error) {
        return res.status(404).json();
    }
})

app.post('/login',async(req, res)=>{

    const {username, password, userType}= await req.body;

    try {
        const user = await User.findOne({username});

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

    const {email, newPassword, userType}=await req.body;

    try {
        const user= await User.findOne({username:email});

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