// app.ts
import express from 'express';
import cors from "cors"
import { sequelize } from './database/sequelize'
import { taskRouter } from './routes/taskRouter'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/tasks", taskRouter)

const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("conexão com banco de dados bem sucedida")
    console.log(`Servidor rodando na porta ${PORT}`)
  })
}).catch(()=>{
  console.log("não foi possível estabelecer a conexão....")
})
