/* eslint-disable prettier/prettier */
import express from 'express';
import * as bookController from '../controllers/books.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//to get all books
router.get('', userAuth, bookController.getAllBooks);

export default router;