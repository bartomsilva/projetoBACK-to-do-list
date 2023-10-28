// TaskController.ts
import { Request, Response } from 'express';
import { Task } from '../model/Task';
import { TaskBusiness } from '../business/TaskBusiness';
import { BadRequestError } from '../error/BadRequest';
import { handlerError } from '../error/handlerError';
import { NotFoundError } from '../error/NotFound';

export class TaskController {

  private taskBusiness = new TaskBusiness()
  
  public async createTask(req: Request, res: Response) {
    try {
      const { description, date, time } = req.body;

      // validar com zod
      const input = {
        description,
        date,
        time
      }
      const response = await this.taskBusiness.createTask(input)
      res.status(201).json(response);

    } catch (error) {
      handlerError(res, error)
    }
  }

  public async getTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (error) {
      handlerError(res, error)
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description, date, time } = req.body;
      const task = await Task.findByPk(id);

      if (!task) {
        throw new NotFoundError('Tarefa não encontrada' );
      }

      task.description = description ?? task.description;
      task.date = date ?? task.date 
      task.time = time ?? task.time

      await task.save();
      res.status(200).json(task);      
    } catch (error) {
      handlerError(res, error)
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);
      if (!task) {
        throw new BadRequestError ('Tarefa não encontrada');
      }
      await task.destroy();
      res.status(201).send("Tarefa excluida com sucesso");

    } catch (error: unknown) {
      console.log(error)
      handlerError(res, error)
    }
  }
}

