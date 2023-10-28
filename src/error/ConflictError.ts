import { HTTP_CODE } from "../model/Status";
import { BaseError } from "./BaseError";

export class ConflictError extends BaseError {
  constructor(message: string = "Recurso já cadastrado") {
    super(HTTP_CODE.CONFLICT, message)
  }
}
