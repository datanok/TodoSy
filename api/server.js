const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const e = require("express");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch(console.error);

const Todo = require("./models/Todo");
Todo.find({})
  .then(todos => {
    console.log(todos);
  })
  .catch(err => {
    console.error(err);
  });
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});
const today = new Date();

app.get("/todays-todos", async (req, res) => {
  const today = new Date(); // Get today's date
  today.setHours(0, 0, 0, 0); // Set the time to midnight
  const todos = await Todo.find({
    dueDate: {
      $gte: today,
      $lt: new Date(today.getTime() + 24 * 60 * 60 * 1000) // Add one day to today's date
    }
  }); // Find todos where dueDate is between today and tomorrow
  console.log('todays')
  console.log(todos)
  res.json(todos);
});


app.put("/todo/edit/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { text: req.body.text },
      {
        new: true,
      }
    );
    res.json(todo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
app.post("/todo/new", async (req, res) => {
  const { text, duedate,desc } = req.body; // Assuming the request body contains both "text" and "duedate" fields

  const todo = new Todo({
    text: text,
    desc:desc,
    duedate: duedate,
  });

  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch (error) {
    console.error("Error saving todo:", error);
    res.status(500).json({ error: "Failed to save todo" });
  }
});


app.delete("/todo/delete/:id", async (req, res) => {
  const result = await Todo.findByIdAndDelete(req.params.id);
  res.json(result);
});

app.delete("/todos/delete", async (req, res) => {
  try {
    const result = await Todo.deleteMany({});
    res.json({ message: "All todos have been deleted.", result });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while deleting todos.", error });
  }
});


app.get("/todo/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.complete = !todo.complete;
  todo.save();
  res.json(todo);
});

app.listen(3001, () => console.log("sever started on port 3001"));
