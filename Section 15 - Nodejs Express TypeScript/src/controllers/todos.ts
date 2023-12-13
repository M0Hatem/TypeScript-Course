import { RequestHandler } from "express";

import Todo from "../models/todo";

const TODO: Todo[] = [];
export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODO.push(newTodo);

  res.status(201).json({ message: "Todo Created", createdTodo: newTodo });
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.json({ todos: TODO, message: "hello" });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updateText = (req.body as { text: string }).text;
  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw Error("could not find todo");
  }
  TODO[todoIndex] = new Todo(TODO[todoIndex].id, updateText);
  res.json({
    message: "todo Updated",
    updatedTodo: TODO[todoIndex],
  });
};
export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODO.findIndex((todo) => todo.id === todoId);
  if (todoIndex < 0) {
    throw Error("could not find todo");
  }
  TODO.slice(todoIndex, 1);
  res.json({ message: "todo Deleted!" });
};

export const todosController = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
};
