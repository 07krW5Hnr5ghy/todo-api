const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Welcome to the To-Do List API.');
});

module.exports = app;