import express  from "express";
import morgan from "morgan";
import mongoose from 'mongoose';

import userRoutes from './routes/userRoutes.js'
const app=express();


// --------DataBase---------------
const db=async()=>{
    try {
        await mongoose.connect("mongodb+srv://wishall:vishal@atlascluster.p9u9uvd.mongodb.net/vinay-DB?retryWrites=true&w=majority")
        console.log("db connected")
    } catch (error) {
        console.log("Error in MongoDb" + error)
    }
}
db();


app.use('/api/v1/user',userRoutes)

// ------Server-------

const server=app.listen(8000,()=>{
    console.log(`Server is running at 8000`)
})

