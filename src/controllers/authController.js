import {validationResult} from 'express-validator/check';

const getLoginRegister = (req, res) => {
  res.render("auth/master");
};

const postRegister = (req, res) => {
  let errorArr = [];

  const validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach(error => {
      errorArr.push(error.msg);
    });
  }
}

module.exports = {
  getLoginRegister,
  postRegister
};
