import express from "express"

import { TaskController } from "../controller/TaskController"

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.get("/", taskController.getTasks)
taskRouter.post("/", taskController.createTask)
taskRouter.put("/:id", taskController.updateTask)
taskRouter.delete("/:id", taskController.deleteTask)


