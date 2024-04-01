import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import authroutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("error");
  });
  

const app = express();
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("server is runing");
});

app.use("/api/user", userRoute);
app.use("/api/auth", authroutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
