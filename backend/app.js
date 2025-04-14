import express from "express";
import dotenv from "dotenv"
import sequelize from "./database/dbConnect.js";
dotenv.config();


const PORT = process.env.PORT || 3000;

const app = express();

const startServer = async ()=>{
    try{
       await sequelize.authenticate()
        app.listen(PORT,()=>{
            console.log(`Server is running on http://localhost:${PORT}`);
        })
        
    } catch (error) {
        console.error(error)
    }
}

startServer();