/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { sendMail } from '../utils/user.util';

//create new user registration
export const newUserRegister = async (body) => {
  const data = await User.find({ email: body.email });
  if (data.length !== 0) {
    throw new Error('Already Exist EmailId');
  } else {
    const data = await User.create(body);
    return data;
  }
};

// user login
export const UserLogin = async (body) => {
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    const result = await bcrypt.compare(body.password, data.password);
    if (result) {
      // eslint-disable-next-line max-len
      var token = jwt.sign({ firstname: data.firstname, email: data.email }, process.env.SECRET_KEY);
      return token;
    }
    else {
      throw new Error('Invalid Password');
    }
  }
  else {
    throw new Error('Invalid Email');
  }
};

//Forgot password
export const forgotPassword = async (body) => {
  // To check email id is register or not in database
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    // eslint-disable-next-line max-len
    var passwordToken = jwt.sign({ 'id': data.id, 'firstname': data.firstname, 'email': data.email }, process.env.SECRET_KEY);
    sendMail(data.email);
    return passwordToken;
  }
  else {
    throw new Error('Invalid Email ID');
  }
};