import express from 'express';
import {home, auth} from '../controllers/index';
import {authValid} from '../validation/index';

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

  return app.use("/", router);
};

module.exports = initRoutes;
