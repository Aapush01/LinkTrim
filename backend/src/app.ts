import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import shortUrl from "./routes/shortUrl";
dotenv.config();

connectDB();
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", shortUrl);
app.listen(port, () => console.log(`Server is running on port: ${port}`));
