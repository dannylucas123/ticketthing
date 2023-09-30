import express from 'express';
import {body} from 'express-validator';
import signUp from './handlers/signup';
import signIn from './handlers/signin';

const router = express.Router();

router.post('/signup', [
  body('email')
    .isEmail()
    .withMessage('Invalid email.'),
  body('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Length must be between 6 and 30.')
], signUp);

router.post('/signin', signIn)


export default router;
