import { HTTP_CODE } from "../model/Status";
import { BaseError } from "./BaseError";

export class BadRequestError extends BaseError {
  constructor(message: string = "Requisição inválida") {
    super(HTTP_CODE.BAD_REQUEST, message)
  }
}

