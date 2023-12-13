import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

app.listen(3000, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}!!`);
});
