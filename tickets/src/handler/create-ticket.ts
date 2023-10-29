import {Request, Response} from 'express';
import {NotAuthenticatedError} from '@superdanny/common';

const createTicket = async (req: Request, res: Response) => {
  if (!req.currentUser) {
    throw new NotAuthenticatedError();
  }

  res.sendStatus(200);
};

export default createTicket;
