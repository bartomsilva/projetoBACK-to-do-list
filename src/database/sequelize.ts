// sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/task.db',  
  logging: false,  
});
console.log("conexão com banco de dados bem sucedida")

export { sequelize };


