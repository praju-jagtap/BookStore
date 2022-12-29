/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import express from 'express';
import * as cartController from '../controllers/cart.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//router to add book into a cart
router.post('/add/:_id',userAuth, cartController.addBookIntoCart);

export default router;