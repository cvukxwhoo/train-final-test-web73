import express from "express";
import mongoose from "mongoose";
import UserModel from "./Models/user.js";
import cors from "cors";

mongoose.connect(
  "mongodb+srv://admin:admin@train-final-test.csp1ytu.mongodb.net/train-final-test?retryWrites=true&w=majority"
);

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.get("/users", async (req, res) => {
  try {
    const listUser = await UserModel.find();
    res.status(200).send({
      message: "Success!",
      data: listUser,
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

app.listen(3001, () => {
  console.log("Server has been run!");
});
