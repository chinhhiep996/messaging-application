import express from 'express';
import passport from 'passport';

import {home, auth} from '../controllers/index';
import {authValid} from '../validation/index';
import initPassportLocal from '../controllers/passportController/local';

//Init all password
initPassportLocal();

const router = express.Router();

/**
 * Init all routes
 * @param app from exactly express module
 */

const initRoutes = (app) => {
  router.get('/', home.getHome);
  router.get('/login-register', auth.getLoginRegister);
  router.post('/register', authValid.register, auth.postRegister);
  router.get("/verify/:token", auth.verifyAccount);

  router.post("/login", passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login-register",
    successFlash: true,
    failureFlash: true
  }));

  return app.use("/", router);
};

module.exports = initRoutes;
