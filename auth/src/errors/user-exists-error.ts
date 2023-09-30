import {CustomError, CustomErrorFormat} from "./custom-error";

export class UserExistsError extends CustomError {
  statusCode: number = 500;
  constructor() {
    super('user exists error');
    Object.setPrototypeOf(this, UserExistsError.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return [{
      message: 'User already exists'
    }]
  }
}
