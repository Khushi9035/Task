const express=require('express');
const dotenv=require('dotenv');
const connectDb = require('./config/db');
const morgan=require('morgan')
const cors=require('cors');


dotenv.config();
connectDb();
const app=express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//user routes
app.use('/api/v1/users',require('./routes/userRoute'))

const PORT=5000||process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});