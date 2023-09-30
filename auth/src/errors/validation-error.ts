import {ValidationError} from "express-validator";
import {CustomError, CustomErrorFormat} from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode: number = 400;
  constructor(private errors: ValidationError[]) {
    super('invalid request param');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return this.errors.map((err) => {
      if ('path' in err) {
        return { message: err.msg as string, field: err.path as string}
      }

      return { message: err.msg }
    })
  }
}
