import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";


//DATABASE
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json())

//ROUTES
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter)


//SERVER 
app.listen(3000, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}!!`);
});
