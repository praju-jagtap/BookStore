/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import HttpStatus from 'http-status-codes';
import * as CustomerService from '../services/customer.service';

/**
 * Controller to add book to wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
//add book into wishlist
export const addCustomerDetail = async (req, res, next) => {
  try {
    const data = await CustomerService.addCustomerDetail(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Add Customer Details Successfully'
    });
  } catch (error) {
    next(error);
  }
};