/* eslint-disable prettier/prettier */
import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const newUserRegister = async (req, res, next) => {
  try {
    const data = await UserService.newUserRegister(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'User Register successfully'
    });
  } catch (error) {
    next(error);
  }
};


/**
 * Controller to login a user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const UserLogin = async (req, res, next) => {
  try {
    const data = await UserService.UserLogin(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Login done successfully'
    });
  } catch (error) {
    next(error);
  }
};

//Controller to forgot password
export const forgotPassword= async (req,res,next) => {
  try {
    const data = await UserService.forgotPassword(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'forget password successfully done,check email for token'
    });
  } catch (error) {
    next(error);
  }
};