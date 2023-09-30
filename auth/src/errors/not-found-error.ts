import {CustomError, CustomErrorFormat} from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: number = 404;
  constructor() {
    super('invalid request param');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return [{
      message: 'Not found!'
    }]
  }
}
