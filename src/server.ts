import app from "./app";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_DB;

//Check if the link to the database is empty
if(!uri){
    throw (Error("Database URI not found"))
} 
mongoose
    .connect(uri)
    .then(() => {
        app.listen(process.env.PORT, () => console.log("Database connected and Server is running on PORT 3000"));
    })
    .catch((err) => {
        console.log(err);
    });

