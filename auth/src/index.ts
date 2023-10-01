import 'express-async-errors';
import mongoose from 'mongoose';
import {app} from './app';

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

