// taskBusiness.ts
import { Task } from "../model/Task";
import { TASK_STATUS } from "../model/Status";
import { IdGenerator } from "../services/IdGenerator";

export class TaskBusiness {

  private idGenerator = new IdGenerator()
  
  public createTask = async (input: {}) => {

    const newTask = {
      ...input,
      id: this.idGenerator.generate(),
      status: TASK_STATUS.OPEN
    }
    return await Task.create(newTask)
  }

}