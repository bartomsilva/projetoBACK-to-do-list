// TaskController.ts
import { Request, Response } from 'express'
import { Task } from '../model/Task'
import { TaskBusiness } from '../business/TaskBusiness'
import { BadRequestError } from '../error/BadRequest'
import { handlerError } from '../error/handlerError'
import { NotFoundError } from '../error/NotFound'

const taskBusiness = new TaskBusiness()
export class TaskController {

  public async createTask(req: Request, res: Response) {
    try {


      const { description, date, time } = req.body

      // validar com zod
      const input = {
        description,
        date,
        time
      }
      const response = await taskBusiness.createTask(input)
      res.status(201).json(response)

    } catch (error) {
      handlerError(res, error)
    }
  }

  public async getTasks(req: Request, res: Response) {
    try {
      const input = { id: req.query.id as string }
      console.log(input)
      console.log(input.id)

      const tasks = await taskBusiness.getTasks(input)
      res.status(200).json(tasks)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params

      const input = {
        description: req.body.description,
        date: req.body.date,
        time: req.body.time
      }
      const task = await taskBusiness.updateTask(id, input)

      res.status(200).json(task)
    } catch (error) {
      handlerError(res, error)
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params
      await taskBusiness.deleteTask(id)
      res.status(201).send("Tarefa excluida com sucesso")
    } catch (error: unknown) {
      console.log(error)
      handlerError(res, error)
    }
  }
}

