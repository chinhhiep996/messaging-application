import {validationResult} from 'express-validator/check';

import { auth } from '../services';

const getLoginRegister = (req, res) => {
  res.render("auth/master", {
    errors: req.flash("errors"),
    success: req.flash("success")
  });
};

const postRegister = async (req, res) => {
  let errorArr = [];
  let successArr = [];

  const validationErrors = validationResult(req);
  if(!validationErrors.isEmpty()) {
    let errors = Object.values(validationErrors.mapped());
    errors.forEach(error => {
      errorArr.push(error.msg);
    });

    req.flash("errors", errorArr);
    return res.redirect("/login-register");
  }

  try {
    let createUserSuccess =  await auth.register(req.body.email, req.body.gender, req.body.password);
    successArr.push(createUserSuccess);

    req.flash("success", successArr);
    return res.redirect("/login-register");
  } catch (error) {
    errorArr.push(error);
    req.flash("errors", errorArr);
    return res.redirect("/login-register");
  }
}

module.exports = {
  getLoginRegister,
  postRegister
};
