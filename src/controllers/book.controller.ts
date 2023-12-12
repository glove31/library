import { Request, Response }  from "express";
import Book from "../models/book.model";

const createBook = async (req:Request, res:Response) => {
    try {
        if(req.body.title === "love") res.status(409).json({message:"Book already exist"});
        console.log(req.body);
        const book = await Book.create(req.body);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json(error);
    }
};

const updateBook = async (req:Request, res:Response) => {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body,{
            new: true,
        });
        res.status(200).json(book);
    } catch (error) {
        res.status(304).json(error);
    }
};

const getBooks = async (req: Request, res: Response) =>{
    try{
        const books = await Book.find();
        res.status(200).json(books);
    }catch (err){
        res.status(500).json(err);
    }
};

const getBook = async (req:Request, res:Response) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(404).json({"message": "Not found", error});
    }
};

const deleteBook = async (req:Request, res:Response) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        //console.error(error);
        res.status(404).json({"message":"Book is not found in the library"})
    }
};

export {
    createBook,
    updateBook,
    getBooks,
    getBook,
    deleteBook
};