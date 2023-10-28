// app.ts
import express from 'express';
import { sequelize } from './database/sequelize';
import cors from "cors"
import dotenv from 'dotenv'
import { taskRouter } from './router/taskRouter';

dotenv.config()

const app = express();
app.use(express.json());
app.use(cors())

app.use("/tasks", taskRouter)

const PORT = process.env.PORT || 3000;

// Sincronize o modelo com o banco de dados e inicie o servidor
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
