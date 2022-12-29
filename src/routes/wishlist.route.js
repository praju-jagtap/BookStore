/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import express from 'express';
import * as wishlistController from '../controllers/wishlist.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route for add book into wishlist
router.post('/addbookinwishlist/:_id', userAuth, wishlistController.addBookIntoWishlist);

//remove book from cart
router.post('/removebookwishlist/:_id', userAuth, wishlistController.removeBookFromWishlist);

export default router;