/* eslint-disable prettier/prettier */
import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userPasswordAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('/register', newUserValidator, userController.newUserRegister);

//route to login a user
router.post('/login', userController.UserLogin);

//route to forgot user password
router.post('/forgotpassword', userController.forgotPassword);

//route to reset user password
router.put('/resetpassword',userPasswordAuth, userController.resetPassword);

export default router;
