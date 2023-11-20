import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/users.js";
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log("rever is running on Port" + PORT);
});

app.get("/", (_, res) => res.send("Hello Server"));
