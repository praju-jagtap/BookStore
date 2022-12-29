/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import HttpStatus from 'http-status-codes';
import * as CartService from '../services/cart.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
//add book into cart
export const addBookIntoCart = async (req, res, next) => {
    try {
        const data = await CartService.addBookIntoCart(req.body, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book Added into Cart Successfully'
        });
    } catch (error) {
        next(error);
    }
};

//remve book one by one from cart
export const removeBookOneByOne = async (req, res, next) => {
    try {
        const data = await CartService.removeBookOneByOne(req.body, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Remove Book One By One From Cart Successfully'
        });
    } catch (error) {
        next(error);
    }
};