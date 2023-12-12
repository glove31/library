import express, { Request, Response }  from "express";
import bookRoute from "./routes/book.route";
const app = express();

app.use(express.json());

/* This is the root route, which is used to check if the server is running */
app.get("/", (req:Request, res:Response) => {
    res.status(200).json({alive: "True"})
});

app.use("/api", bookRoute);

export default app;