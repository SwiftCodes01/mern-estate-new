import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./Database/connectDatabse.js";
import userRouter from "./routes/user.route.js";

const app = express();
dotenv.config();

app.use("/api/user",userRouter);

app.listen(3000, () => {
  connectDatabase();
  console.log("Server is running on port 3000!!!");
});
