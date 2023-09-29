import {Request, Response} from 'express';
import {validationResult} from 'express-validator';
import {UserSignInDto} from '../models/user';

const signUp = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send('oh no')
  }

  const {email, password} = req.body as UserSignInDto;
  console.log(email);

  res.send(email);
};

export default signUp;
