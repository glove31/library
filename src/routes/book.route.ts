import express from "express";
import { createBook, updateBook, getBooks, getBook, deleteBook } from "../controllers/book.controller";

const router = express.Router();

router.post("/books",createBook);

router.patch("/books/:id", updateBook);

router .get("/books", getBooks);

router .get("/books/:id", getBook);

router .delete("/books/:id", deleteBook);

export default router;
