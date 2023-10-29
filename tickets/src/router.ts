import {validateRequest, verifyAuth} from '@superdanny/common';
import express from 'express';
import createTicket from './handler/create-ticket';
import {body} from 'express-validator';

const router = express.Router();

router.post('', verifyAuth, [
  body('title').not().isEmpty().withMessage('Title is required'),
  body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0')
], validateRequest, createTicket);

export default router;
