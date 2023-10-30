import express from "express"
import { TaskController } from "../controller/TaskController"
import { TaskBusiness } from "../business/TaskBusiness"
import { IdGenerator } from "../services/IdGenerator"

export const taskRouter = express.Router()

const taskController = new TaskController
(
  new TaskBusiness(
    new IdGenerator()
  )
)

taskRouter.get("/", taskController.getTasks)
taskRouter.get("/:id", taskController.getTasks)

taskRouter.post("/", taskController.createTask)

taskRouter.put("/:id", taskController.updateTask)
taskRouter.delete("/:id", taskController.deleteTask)


