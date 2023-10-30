// TaskController.ts
import { Request, Response } from 'express'
import { TaskBusiness } from '../business/TaskBusiness'
import { handlerError } from '../error/handlerError'
import { GetTasksSchema } from '../dtos/getTasks.dto'
import { CreateTaskSchema } from '../dtos/createTask.dto'

export class TaskController {

  constructor(private taskBusiness: TaskBusiness) { }

  public createTask = async (req: Request, res: Response): Promise<void> => {
    try {

      const { description, date, time } = req.body

      const input = CreateTaskSchema.parse({
        description,
        date,
        time
      })

      const response = await this.taskBusiness.createTask(input)
      res.status(201).json(response)

    } catch (error) {
      handlerError(res, error)
    }
  }

  public getTasks = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = GetTasksSchema.parse({
        id: req.params.id,
        status: req.query.status as string
      })
      const tasks = await this.taskBusiness.getTasks(input)
      res.status(200).json(tasks)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public updateTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params

      const input = {
        description: req.body.description,
        date: req.body.date,
        time: req.body.time
      }
      const task = await this.taskBusiness.updateTask(id, input)
      res.status(200).json(task)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public deleteTask = async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params
      await this.taskBusiness.deleteTask(id)
      res.status(201).send("Tarefa excluida com sucesso")
    } catch (error: unknown) {
      handlerError(res, error)
    }
  }
}

