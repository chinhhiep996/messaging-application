import express from 'express';
import {home, auth} from '../controllers/index';

const router = express.Router();

/**
 * Init all routes
 * @param app from exactly express module
 */

const initRoutes = (app) => {
  router.get('/', home.getHome);
  
  
  router.get('/login', auth.getLoginRegister);

  return app.use("/", router);
};

module.exports = initRoutes;
