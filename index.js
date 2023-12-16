import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.listen(3001, () => {
  console.log("Server has been run!");
});
