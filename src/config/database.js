const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const {MONGODB_URI} = process.env;

const connectToDatabase = async () => {
    try{
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('Connected to MongoDB successfully');
    }catch(error){
        console.error('Error connection to MongoDB:',error.message);
        process.exit(1);
    }
};

module.exports = connectToDatabase;