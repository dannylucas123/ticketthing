import {Request, Response} from 'express';
import {UserExistsError} from '@superdanny/common';
import {toHash} from '../helpers/password';
import {User, UserSignUpDto} from '../models/user';

const signUp = async (req: Request, res: Response) => {
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
