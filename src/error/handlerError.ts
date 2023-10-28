
import { Response } from "express"
import { BaseError } from "./BaseError"
import { ZodError } from "zod"
import { HTTP_CODE } from "../model/Status"

export const handlerError = (res: Response, error: unknown) => {
  if (error instanceof ZodError) {
    res.status(HTTP_CODE.BAD_REQUEST).send(error.issues[0])
  } else if (error instanceof BaseError) {
    res.status(error.statusCode).send({message: error.message}) 
  } else {
    res.status(HTTP_CODE.INTERNAL_SERVER_ERROR).send(error)
  }
}