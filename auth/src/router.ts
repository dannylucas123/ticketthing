import express from 'express';
import {body} from 'express-validator';
import signUp from './handlers/signup';

const router = express.Router();

router.post('/api/users/signup', [
  body('email')
    .isEmail()
    .withMessage('Invalid email.'),
  body('password')
    .trim()
    .isLength({ min: 6, max: 30 })
    .withMessage('Length must be between 6 and 30.')
], signUp);


export default router;
