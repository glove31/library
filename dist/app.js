"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const book_route_1 = __importDefault(require("./routes/book.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
/* This is the root route, which is used to check if the server is running */
app.get("/", (req, res) => {
    res.status(200).json({ alive: "True" });
});
app.use("/api", book_route_1.default);
exports.default = app;
