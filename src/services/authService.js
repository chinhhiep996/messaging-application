import uuidv4 from 'uuid/v4';
import bcrypt from 'bcrypt';

import UserModel from '../models/user.model';
import { transErrors, transSuccess } from './../../lang/vi';

let saltRounds = 7;

const register = (email, gender, password) => {
  return new Promise(async (resolve, rejects) => {
    let userByEmail = await UserModel.findByEmail(email);
    if (userByEmail) {
      if(userByEmail.deleteAt !== null) {
        return rejects(transErrors.account_removed)
      }
      if(!userByEmail.local.isActive) {
        return rejects(transErrors.account_not_active)
      }
      return rejects(transErrors.account_exited)
    }

    let salt = bcrypt.genSaltSync(saltRounds);
    let userItem = {
      username: email.split('@')[0],
      gender: gender,
      local: {
        email: email,
        password: bcrypt.hashSync(password, salt),
        verifyToken: uuidv4()
      }
    };

    let user = await UserModel.createNew(userItem);
    resolve(transSuccess.userCreated(user.local.email));
  });
};

module.exports = {
  register
};
