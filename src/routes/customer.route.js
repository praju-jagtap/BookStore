/* eslint-disable prettier/prettier */
/* eslint-disable max-len */
import express from 'express';
import * as CustomerController from '../controllers/customer.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route for add customer details
router.post('/add', userAuth, CustomerController.addCustomerDetail);

export default router;