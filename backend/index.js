// Backend (Express + MongoDB)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

console.log(process.env.MONGO_PORT);
console.log(process.env.MONGO_HOST);

// MongoDB Connection
mongoose.connect(
  `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/MERN2`
);

const TodoSchema = new mongoose.Schema({ text: String });
const Todo = mongoose.model("Todo", TodoSchema);

// Add Todo
app.post("/add", async (req, res) => {
  const todo = new Todo({ text: req.body.text });
  await todo.save();
  res.json(todo);
});

// Get Todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.get("/", (req, res) => {
  return res.json({ success: true, message: "working" });
});

app.listen(4000, () => {
  console.log("port running on 4000 ");
});
