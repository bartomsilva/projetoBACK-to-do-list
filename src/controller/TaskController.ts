// TaskController.ts
import { Request, Response } from 'express';
import { Task } from '../model/Task';
import { TASK_STATUS } from '../model/Status';
import { GeneratorId } from '../services/GeneratorId';

class TaskController {

  // constructor(private genId: GeneratorId) {
  // }
  
  public async createTask(req: Request, res: Response) {
    const genId = new GeneratorId()
    try {
      const { description, date, time } = req.body;
      const id =  genId.generate()

      // validar com zod
      const newTask = {
        id,
        description,
        date,
        time,
        status: TASK_STATUS.OPEN
      }     
      console.log(newTask) 
      const task = await Task.create(newTask);
      res.status(201).json(task);
    } catch (error) {
      console.log(error)
      res.status(500).json({ error: 'Erro ao criar a tarefa' });
    }
  }

  public async getTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      return res.status(200).json(tasks);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description } = req.body;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }
      task.description = description;
      await task.save();
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao atualizar a tarefa' });
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const task = await Task.findByPk(id);

      if (!task) {
        return res.status(404).json({ error: 'Tarefa não encontrada' });
      }

      await task.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao excluir a tarefa' });
    }
  }
}
export { TaskController };
