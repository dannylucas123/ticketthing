import express from 'express';
import {body} from 'express-validator';
import signUp from './handlers/signup';
import signIn from './handlers/signin';
import {validateRequest} from './middlewares/validate-request';
import currentUser from './handlers/currentuser';
import signOut from './handlers/signout';
import currentUserMw from './middlewares/current-user';

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

router.post('/currentuser', currentUserMw, currentUser);

router.post('/signout', signOut);

export default router;
