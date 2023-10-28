// sequelize.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './src/database/task.db',  
  logging: false,  
});

export { sequelize };


