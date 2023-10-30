import z from 'zod'

export interface CreateTaskInputDTO {
  description: string,
  date: string,
  time: string
}
export const CreateTaskSchema = z.object({
  description: z.string(
    {
      required_error: "'description' é obrigatório",
      invalid_type_error: "'description' deve ser do tipo string"
    }).min(2, "'name' deve ter no mínimo 2 caracteres"),

  date: z.string(
    {
      required_error: "'date' é obrigatório",
      invalid_type_error: "'date' deve ser do tipo string:  dd/mm/aaaa"
    }).refine((value) => /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value),
      "'date' invalido"),

  time: z.string(
    {
      required_error: "'time' é obrigatória",
      invalid_type_error: "'time' deve ser do tipo string: hh:mm"
    }).refine((value) => /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(value)
      , "'time' inválido"),
}).transform(data => data as CreateTaskInputDTO)