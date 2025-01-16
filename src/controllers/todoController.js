const Todo = require('../models/Todo');

const updateTodo = async (req,res) => {
    try{
        const {id} = req.params;
        const {title,description,status} = req.body;

        const todo = await Todo.findById(id);
        if(!todo){
            return res.status(404).json({message:'To-do not found'});
        }

        if(todo.userId.toString() !== req.user.id){
            return res.status(403).json({message:'Forbidden'});
        } 

        todo.title = title || todo.title;
        todo.description = description || todo.description;
        todo.status = status || todo.status;
        await todo.save();

        res.status(200).json({message:'To-do updated successfully',todo});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
}

module.exports = {updateTodo};