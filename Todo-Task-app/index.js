const express = require("express");
const path = require("path");
const methodOverride = require('method-override');

const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: true }));

let tasks = [
  {
    id: uuidv4(),
    title: "Call the dentist",
    description: "Schedule an appointment for next week",
  },
  {
    id: uuidv4(),
    title: "Workout",
    description: "30 minutes of cardio and strength training",
  },
  {
    id: uuidv4(),
    title: "Read a book",
    description: "Start reading 'Atomic Habits'",
  },
  {
    id: uuidv4(),
    title: "Plan weekend trip",
    description: "Decide destination and make bookings",
  },
];

// Show all tasks
app.get("/tasks", (req, res) => {
  res.render("index", { tasks });
});

// Show form to create task
app.get("/tasks/new", (req, res) => {
  res.render("new");
});

// Handle task creation
app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    tasks.push({ id: uuidv4(), title, description });
  }
  res.redirect("/tasks");
});

// Show a single task (GET /tasks/:id)
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).send("Task not found");
  res.render("show", { task });
});

// Show form to edit task
app.get("/tasks/:id/edit", (req, res) => {
  const task = tasks.find((t) => t.id === req.params.id);
  if (!task) return res.status(404).send("Task not found");
  res.render("edit", { task });
});

// Handle update
app.put("/tasks/:id", (req, res) => {
  const { title, description } = req.body;
  const task = tasks.find((t) => t.id === req.params.id);
  if (task && title && description) {
    task.title = title;
    task.description = description;
  }
  res.redirect("/tasks");
});

// Handle delete
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== req.params.id);
  res.redirect("/tasks");
});


app.listen(port, () => {
  console.log(`Server is running on port no ${port}`);
});
