import * as taskService from "../services/task.service.js";
import {
  createTaskSchema,
  updateTaskSchema,
} from "../validations/task.validation.js";

export const createTask = async (req, res) => {
  const validated = createTaskSchema.parse(req.body);
  const task = await taskService.createTask(validated);
  res.status(201).json(task);
};

export const getTasks = async (_, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

export const getUserTasks = async (req, res) => {
  const tasks = await taskService.getTasksByUser(req.params.userId);
  res.json(tasks);
};

export const updateTask = async (req, res) => {
  const validated = updateTaskSchema.parse(req.body);
  const task = await taskService.updateTask(req.params.id, validated);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await taskService.deleteTask(req.params.id);
  res.status(204).send();
};
