import express from 'express';
import {body} from 'express-validator';
import currentUser from './handlers/currentuser';
import signIn from './handlers/signin';
import signOut from './handlers/signout';
import signUp from './handlers/signup';
import {validateRequest, verifyAuth} from '@superdanny/common';

const router = express.Router();

router.post('/signup', [
  body('email')
    .isEmail()
    .withMessage('Invalid email.'),
  body('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Length must be between 6 and 30.')
], validateRequest, signUp);

router.post('/signin', [
  body('email')
    .notEmpty()
    .withMessage('No password supplied.'),
  body('password')
    .notEmpty()
    .withMessage('No password supplied.')
], validateRequest, signIn);

router.post('/currentuser', verifyAuth, currentUser);

router.post('/signout', signOut);

export default router;
