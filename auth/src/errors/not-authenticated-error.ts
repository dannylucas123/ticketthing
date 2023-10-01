import {CustomError, CustomErrorFormat} from "./custom-error";

export class NotAuthenticatedError extends CustomError {
  statusCode: number = 401;
  constructor() {
    super('not authenticated');
    Object.setPrototypeOf(this, NotAuthenticatedError.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return [{
      message: 'Not authenticated!'
    }]
  }
}
