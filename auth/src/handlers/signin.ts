import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import {RequestValidationError} from '../errors/validation-error';
import {User, UserSignInDto} from '../models/user';
import {UserDoesNotExist} from '../errors/user-does-not-exists-error';
import {compareHash} from '../helpers/password';

const signIn = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const {email, password} = req.body as UserSignInDto;

  const exists = await User.findOne({email});
  if (!exists) {
    throw new UserDoesNotExist();
  }

  const match = await compareHash(password, exists.password)

  if (!match) {
    throw new UserDoesNotExist();
  }

  const accessToken = jwt.sign({email}, 'secretkey213');

  res.send({accessToken});
};

export default signIn;
