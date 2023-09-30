import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {UserExistsError} from '../errors/user-exists-error';
import {RequestValidationError} from '../errors/validation-error';
import {User, UserSignUpDto} from '../models/user';
import {toHash} from '../helpers/password';

const signUp = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  const {email, password} = req.body as UserSignUpDto;

  const exists = await User.findOne({email});
  if (exists) {
    throw new UserExistsError();
  }

  const hashed = await toHash(password);

  const user = User.build({email, password: hashed});

  user.save();

  res.send(user);
};

export default signUp;
