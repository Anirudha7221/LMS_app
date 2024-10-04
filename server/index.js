const express = require('express');

const cors = require('cors');

const bcrypt = require('bcrypt');
const saltround=10;

const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());


app.listen(PORT, ()=>{
    console.log('app is running');
})