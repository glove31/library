"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_paginate_1 = __importDefault(require("mongoose-paginate"));
/* This is creating a new schema for the books model. */
let bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    publishingDate: {
        type: Date,
        require: true,
        default: new Date(),
    },
    avalaible: {
        type: Boolean,
        require: true,
        default: true
    },
    quantity: {
        type: Number,
        require: true,
        default: 0
    }
});
//{timestamps: true} //will give us the time at which the book was created and an update time when is been updated
bookSchema.plugin(mongoose_paginate_1.default); //pour faire la pagnination facilement
const book = mongoose_1.default.model("Book", bookSchema);
exports.default = book;
