"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const uri = process.env.MONGO_DB;
//Check if the link to the database is empty
if (!uri) {
    throw (Error("Database URI not found"));
}
mongoose_1.default
    .connect(uri)
    .then(() => {
    app_1.default.listen(process.env.PORT, () => console.log("Database connected and Server is running on PORT 3000"));
})
    .catch((err) => {
    console.log(err);
});
