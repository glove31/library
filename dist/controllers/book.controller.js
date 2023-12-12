"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.getBook = exports.getBooks = exports.updateBook = exports.createBook = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.body.title === "love")
            res.status(409).json({ message: "Book already exist" });
        console.log(req.body);
        const book = yield book_model_1.default.create(req.body);
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.createBook = createBook;
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json(book);
    }
    catch (error) {
        res.status(304).json(error);
    }
});
exports.updateBook = updateBook;
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_model_1.default.find();
        res.status(200).json(books);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findById(req.params.id);
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json({ "message": "Not found", error });
    }
});
exports.getBook = getBook;
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    }
    catch (error) {
        //console.error(error);
        res.status(404).json({ "message": "Book is not found in the library" });
    }
});
exports.deleteBook = deleteBook;
