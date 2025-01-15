const app = require('./app');
const connectToDatabase = require('./config/database');

const PORT = process.env.PORT || 3001;

connectToDatabase();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});