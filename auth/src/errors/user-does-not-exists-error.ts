import {CustomError, CustomErrorFormat} from "./custom-error";

export class UserDoesNotExist extends CustomError {
  statusCode: number = 500;
  constructor() {
    super('user does not exist.');
    Object.setPrototypeOf(this, UserDoesNotExist.prototype);
  }
  
  serialize(): CustomErrorFormat[] {
    return [{
      message: 'User does not exist.'
    }]
  }
}
