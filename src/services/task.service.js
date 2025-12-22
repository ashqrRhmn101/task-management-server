import { Task } from "../models/task.model";

export const createTask = (payload) => Task.create(payload);

export const getAllTasks = () => Task.find().populate("userId", "name email");

export const getTasksByUser = (userId) => Task.find({ userId });

export const updateTask = (id, payload) =>
  Task.findByIdAndUpdate(id, payload, { new: true });

export const deleteTask = (id) => Task.findByIdAndDelete(id);
