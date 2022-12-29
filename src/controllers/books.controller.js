/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as BookService from '../services/books.service';

/**
* Controller to get all books available
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/

export const getAllBooks = async (req, res, next) => {
    try {
        const data = await BookService.getAllBooks();
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'All books fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};
