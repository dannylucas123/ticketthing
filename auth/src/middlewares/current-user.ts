import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';

interface Payload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: Payload
    }
  }
}

const currentUserMw = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.cookie) {
    return next();
  }
  
  const session = req.headers.cookie.split(';').find(res => res.includes('session'));

  if(!session) {
    return next();
  }

  jwt.verify(session.split('=')[1], process.env.JWT_SECRET!, {}, (err, decoded)  => {
    if (err) {
      return next();
    } else {
      req.currentUser = decoded as Payload;
    }
    
    next();
  });
};

export default currentUserMw;
