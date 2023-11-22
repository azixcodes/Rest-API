import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import cors from "cors";
import "dotenv/config";
const app = express();
const PORT = 5000;
app.use(cors());

const URL = process.env.MONGO_URL;

app.use(bodyParser.json());
app.use("/users", userRoutes);
mongoose
  .connect(URL)
  .then((res) => {
    console.log("connected to mongodb database");
  })
  .catch((err) => {
    console.log(err);
  });
app.listen(PORT, () => {
  console.log("rever is running on Port" + PORT);
});

app.get("/", (_, res) => res.send("Hello Server"));
