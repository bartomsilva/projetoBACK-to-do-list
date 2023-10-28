import { HTTP_CODE } from "../model/Status";
import { BaseError } from "./BaseError";

export class UnAuthorizedError extends BaseError {
  constructor(message: string = "Autorização negada") {
    super(HTTP_CODE.UNAUTHORIZED, message)
  }
}
