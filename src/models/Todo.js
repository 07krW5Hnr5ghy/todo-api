const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            trim:true
        },
        description:{
            type:String,
            trim:true
        },
        status:{
            type:String,
            required:true,
            enum:['Pending','In Progress','Completed'],
            default:'Pending'
        },
        priority:{
            type:String,
            enum:['Low','Medium','High'],
            default:'Medium'
        },
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
    },
    {
        timestamps:true
    }
);

const Todo = mongoose.model('Todo',TodoSchema);

module.exports = Todo;