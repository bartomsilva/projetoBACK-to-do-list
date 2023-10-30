import z from "zod"
// import { TASK_STATUS } from "../model/Status"

export interface GetTasksInputDTO {
  id?: string,
  status?: string
}

export const GetTasksSchema = z.object({
  status: z.string(
    { invalid_type_error: "'status' precisa ser string" })
    .min(1, "'status' precisa ter pelomenos 1 caracter").optional(),
  id: z.string(
    { invalid_type_error: "'id' precisa ser string" })
    .min(1, "'id' precisa ter pelomenos 1 caracter").optional()
})
  .transform(data => data as GetTasksInputDTO)