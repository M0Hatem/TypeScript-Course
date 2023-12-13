import { Router } from "express";

import { todosController, updateTodo } from "../controllers/todos";

const router = Router();

router.post("/", todosController.createTodo);

router.get("/", todosController.getTodos);

router.patch("/:id", todosController.updateTodo);

router.delete("/:id", todosController.deleteTodo);

export default router;
