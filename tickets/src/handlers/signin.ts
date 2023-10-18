import {Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {UserDoesNotExist,BadRequestError} from '@superdanny/common';
import {compareHash} from '../helpers/password';
import {User, UserSignInDto} from '../models/user';

const signIn = async (req: Request, res: Response) => {
  const {email, password} = req.body as UserSignInDto;

  const exists = await User.findOne({email});
  if (!exists) {
    throw new UserDoesNotExist();
  }

  const match = await compareHash(password, exists.password);

  if (!match) {
    throw new BadRequestError();
  }

  const accessToken = jwt.sign({email: exists.email, id: exists.id}, process.env.JWT_SECRET!);

  res.send({accessToken});
};

export default signIn;