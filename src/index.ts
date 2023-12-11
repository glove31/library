import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/book.model";

dotenv.config();

const app = express();
app.use(express.json());

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

app.get("/books", async (req: Request, res: Response) =>{
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch (err){
        res.status(500).json(err);
    }
});

app.get("/books/:id",async (req:Request, res:Response) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({"message": "Not found", error});
    }
});

app.post("/books",async (req:Request, res:Response) => {
    try {
        console.log(req.body);
        const book = await Book.create(req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json(error);
    }
});

app.patch("/books/:id",async (req:Request, res:Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.delete("/books/:id",async (req:Request, res:Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        //console.error(error);
        res.status(404).json({"message":"Book is not found in the library"})
    }
})
