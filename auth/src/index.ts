import express from 'express';
import 'express-async-errors';
import {json} from 'body-parser';
import cookieSession from 'cookie-session';
import mongoose from 'mongoose';
import router from './router';
import errorHandler from './errors/handler';
import {NotFoundError} from './errors/not-found-error';

const app = express();

app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false,
  secure: true
}));

app.use('/api/users', router);
app.all('*', async () => {
  throw new NotFoundError();
});
app.use(errorHandler);

const start = async() => {
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

