/* eslint-disable prettier/prettier */
import User from '../models/user.model';
import bcrypt from 'bcrypt';

//create new user Refactore-registration for hash password
export const newUserRegister = async (body) => {
  const email = await User.findOne({ email: body.email });
  if (email) {
    throw new Error('Already Exist EmailId');
  } else {
    const saltRounds = 10;
    const hashpassword = await bcrypt.hash(body.password,saltRounds)
    body.password = hashpassword
    const data = await User.create(body);
    return data;
  }
};
