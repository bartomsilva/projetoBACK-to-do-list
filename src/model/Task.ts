import { DataTypes, Model } from 'sequelize'
import { sequelize } from '../database/sequelize'
import { TASK_STATUS } from './Status'

class Task extends Model {
  public id!: string
  public date!: string
  public time!: string
  public description!: string
  public status!: TASK_STATUS
}

Task.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Task',
    tableName: 'tasks',
  }
)

export { Task }