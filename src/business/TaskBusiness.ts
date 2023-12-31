// taskBusiness.ts
import { Task } from "../model/Task"
import { TASK_STATUS } from "../model/Status"
import { IdGenerator } from "../services/IdGenerator"
import { NotFoundError } from "../error/NotFound"
import { BadRequestError } from "../error/BadRequest"
import { GetTasksInputDTO } from "../dtos/getTasks.dto"
import { UpdateTaskInputDTO } from "../dtos/updateTask.dto"
import { CreateTaskInputDTO } from "../dtos/createTask.dto"

export class TaskBusiness {
  constructor(private idGenerator: IdGenerator) { }

  public createTask = async (input: CreateTaskInputDTO):Promise<Task> => {
    const newTask = {
      ...input,
      id: this.idGenerator.generate(),
      status: TASK_STATUS.OPEN
    }
    return await Task.create(newTask)
  }

  public getTasks = async (input: GetTasksInputDTO): Promise<Task[]> => {
    switch (true) {
      case (input.id !== undefined):
        return await Task.findAll({
          where: {id: input.id}})
      case (input.id === undefined && input.status===undefined):
        return await Task.findAll()
      case (input.status !== undefined):
        return await Task.findAll({
          where: {status: input.status }
        })
      default:
        return []
    }
  }

  public updateTask = async (id: string, updateTask: UpdateTaskInputDTO):Promise<Task> => {
    const task = await Task.findByPk(id)
    const { description, date, time } = updateTask
    if (!task) {
      throw new NotFoundError('Tarefa não encontrada')
    }
    if(!task.status.includes(TASK_STATUS.OPEN) && !task.status.includes(TASK_STATUS.PAUSED)){
      throw new BadRequestError("O Status da Task não permite alteração")
    }
    task.description = description ?? task.description
    task.date = date ?? task.date
    task.time = time ?? task.time
    return await task.save()
  }

  public deleteTask = async (id: string):Promise<void> => {
    const task = await Task.findByPk(id)
    if (!task) {
      throw new BadRequestError('Tarefa não encontrada')
    }
    await task.destroy()
  }
}