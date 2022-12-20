/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';

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

//user-login
export const UserLogin = async (body) => {
  const data = await User.findOne({ email: body.email });
  if (data !== null) {
    console.log('Password',body.password);
    const result = await bcrypt.compare(body.password,data.password)
    if (result){
      return data;
    }else {
      throw new Error('Invalid Password');
    }
  } else {
    throw new Error('Invalid Email');
  }
};