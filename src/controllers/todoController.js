const Todo = require('../models/Todo');

// create a new todo
const createTodo = async (req,res) => {
    try{
        const {title,description,status} = req.body;
        
        const todo = new Todo({
            title,
            description,
            status,
            userId:req.user.id,
        });

        await todo.save();
        res.status(201).json({message:'Todo created successfully',todo});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server Error',error});
    }
}

// Get all todos for the authenticated user
const getTodos = async (req,res) => {
    try{
        const {page=1,limit=10,title,status} = req.query;

        const filter = {};
        if(title) filter.title = {$regex:title,$options:'i'};
        if(status) filter.status = status;
        filter.userId = req.user.id;

        const pageNumber = parseInt(page,10);
        const limitNumber = parseInt(limit,10);
        const skip = (pageNumber-1)*limitNumber;

        const todos = await Todo.find(filter)
        .skip(skip)
        .limit(limitNumber);

        const total = await Todo.countDocuments(filter);

        res.status(200).json({
            data:todos,
            page:pageNumber,
            limit:limitNumber,
            total,
        });
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
}

// Get a single todo by ID
const getTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOne({ _id: id, userId: req.user.id });
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

// Update a todo
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const todo = await Todo.findOneAndUpdate(
            { _id: id, userId: req.user.id },
            { title, description, status },
            { new: true, runValidators: true }
        );

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(200).json({ message: 'Todo updated successfully', todo });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};

// Delete a todo
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOneAndDelete({ _id: id, userId: req.user.id });

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error });
    }
};


module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};