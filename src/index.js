import 'dotenv/config'
import connectDB from './db/index.js'


connectDB()












// import connectDB from './db/index.js';
// import {app} from './app.js'


// connectDB()
// .then(()=>{
//     app.listen(process.env.PORT || 8000, ()=>{
//         console.log("Server is listenting at PORT:", process.env.PORT);
//     })
//     app.on('error', ()=>{
//         console.log("Error!!!", error);
//     })
// })
// .catch((error)=>{
//     console.log("MongoDB connection Failed!!!", error);
// })





/*

import express from 'express';
import mongooes from 'mongoose';
import { DB_NAME } from './constants';


const app = express();


// using IIFE(immediately invoked function expression) method to connect to the database using mongoose

;(async ()=>{
    try {
        await mongooes.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=> console.error("The error was about listening the server please check the connection codebase. The error is :", error))

        app.listen(process.env.PORT || 8000, ()=>{
            console.log("The Server/App is listening at port : ", process.env.PORT || 8000)
        })

    } catch (error) {
        console.error("Database connection error: ",error);
    }
})()



*/





