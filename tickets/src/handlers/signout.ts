import {Request, Response} from 'express';

const signOut = async (req: Request, res: Response) => {
  res.clearCookie('session');
};

export default signOut;
