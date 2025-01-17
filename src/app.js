const express = require('express');
const dotenv = require('dotenv');

const User = require('./models/User');
const Todo = require('./models/Todo');

const todoRouter = require('./routes/todoRoutes');
const authRouter = require('./routes/authRoutes');

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

app.get('/seed',async (req,res)=>{
    try{
        const user = await User.create({
            name:'John Doe',
            email:'john@doe.com',
            password:'hashedpassword'
        });
        const todos = await Todo.insertMany([
            {
                title:'Buy Groceries',
                description:'Milk,eggs,bread',
                status:'Pending',
                priority:'High',
                userId:user._id,
            },
            {
                title:'Read a book',
                description:'Read 30 pages of the new book',
                status:'In Progress',
                priority:'Medium',
                userId:user._id,
            }
        ]);

        res.status(200).json({message:'Data seeded successfully',user,todos});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error seeding data',error});
    }
});

app.use(todoRouter);
app.use(authRouter);

module.exports = app;