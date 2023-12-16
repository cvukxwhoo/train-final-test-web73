import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3001, () => {
  console.log("Server has been run!");
});
