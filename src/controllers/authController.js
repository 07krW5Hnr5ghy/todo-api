const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req,res) => {
    try{
        const {name,email,password} = req.body;
        
        const existingUser = await User.findOne({email});

        if(existingUser){
            return res.status(400).json({message:'Email is already registered.'});
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = await User.create({
            name,
            email,
            password:hashedPassword
        });

        const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
            expiresIn:'1h'
        });

        res.status(201).json({message:'User registered successfully',token});
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error',error});
    }
}

module.exports = {register};