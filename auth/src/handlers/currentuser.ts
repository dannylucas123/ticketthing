import {Request, Response} from 'express';
import {NotAuthenticatedError} from '../errors/not-authenticated-error';

const currentUser = async (req: Request, res: Response) => {
  if (req.currentUser) {
    return res.send({currentUser: req.currentUser});
  }

  throw new NotAuthenticatedError();
};

export default currentUser;
