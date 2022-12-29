/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import HttpStatus from 'http-status-codes';
import * as WishlistService from '../services/wishlist.service';

/**
 * Controller to add book to wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
//add book into wishlist
export const addBookIntoWishlist = async (req, res, next) => {
  try {
    const data = await WishlistService.addBookIntoWishlist(req.body,req.params._id);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Book Added into Wishlist Successfully'
    });
  } catch (error) {
    next(error);
  }
};

//remove book from wishlist
export const removeBookFromWishlist= async (req, res, next) => {
    try {
      const data = await WishlistService.removeBookFromWishlist(req.body,req.params._id);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'Remove Book From Wishlist Successfully'
      });
    } catch (error) {
      next(error);
    }
  };