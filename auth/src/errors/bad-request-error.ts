import {CustomError, CustomErrorFormat} from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode: number = 500;
  constructor() {
    super('bad request');
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return [{
      message: 'Bad Request'
    }]
  }
}
