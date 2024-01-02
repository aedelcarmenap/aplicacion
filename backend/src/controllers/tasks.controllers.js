import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.findById({
    user: req.user.id
  }).populate("user")
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, descripcion, date } = req.body;
  console.log(req.user)
  const newTask = new Task({
    title,
    descripcion,
    date,
    user: req.user.id
  });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

export const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};

export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
};
