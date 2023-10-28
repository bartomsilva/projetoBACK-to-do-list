// app.ts
import express from 'express';
import { sequelize } from './database/sequelize';
import cors from "cors"
import { taskRouter } from './routes/taskRouter';

const app = express();
app.use(cors())
app.use(express.json());

app.use("/tasks", taskRouter)

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
