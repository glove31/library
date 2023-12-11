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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const book_model_1 = __importDefault(require("./models/book.model"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const uri = process.env.MONGO_DB;
//Check if the link to the database is empty
if (!uri) {
    throw (Error("Database URI not found"));
}
mongoose_1.default
    .connect(uri)
    .then(() => {
    app.listen(process.env.PORT, () => console.log("Database connected and Server is running on PORT 3000"));
})
    .catch((err) => {
    console.log(err);
});
app.get("/books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_model_1.default.find();
        res.status(200).json(books);
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
app.get("/books/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findById(req.params.id);
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json({ "message": "Not found", error });
    }
}));
app.post("/books", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const book = yield book_model_1.default.create(req.body);
        res.status(200).json(book);
    }
    catch (error) {
        res.status(404).json(error);
    }
}));
app.patch("/books/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
    }
    catch (error) {
        res.status(500).json(error);
    }
}));
app.delete("/books/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.default.findByIdAndDelete(req.params.id);
        res.status(200).json(book);
    }
    catch (error) {
        //console.error(error);
        res.status(404).json({ "message": "Book is not found in the library" });
    }
}));
