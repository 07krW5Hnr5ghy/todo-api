const express = require('express');
const dotenv = require('dotenv');

const User = require('./models/User');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/', async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).json({
            message:'Welcome to the To-Do List API!',
            users,
        });
    }catch(error){
        res.status(500).json({message:'Database connection failed',error});
    }
    
});

module.exports = app;