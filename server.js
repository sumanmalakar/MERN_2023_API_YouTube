import express from 'express'
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.js'
import blogRouter from './routes/blog.js'
import { config } from 'dotenv';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

config({
    path:'./data/config.env'
})

mongoose.connect(process.env.MONGO_URL,{
    dbName:"MERN_2023_YouTube"
}).then(()=>console.log("MongoDB is Connected!"))


// userRouter
app.use('/api/users',userRouter)

// blogRouter
app.use('/api/blogs',blogRouter)

// MVC = MODEL VIEWS CONTROLLS



app.listen(process.env.PORT,()=>console.log(`Server is running on Port ${process.env.PORT}`))