import {json} from 'body-parser';
import express from 'express';
import 'express-async-errors';
import mongoose from 'mongoose';
import errorHandler from './errors/handler';
import {NotFoundError} from './errors/not-found-error';
import currentUserMw from './middlewares/current-user';
import router from './router';

const app = express();

app.set('trust proxy', true);
app.use(json());

app.use('/api/users', currentUserMw, router);
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

const start = async() => {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET must be defined');
  }

  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (err) {
    console.error('fatal');
  }

  app.listen(4000, () => {
    console.log('Listening on port 4000!!!');
  });
}

start();

