'use strict'

import session from 'express-session';
import connectMongo from 'connect-mongo';

// const MongoStore = connectMongo(session);

/**
 * 
 * This variable is where save session, in this case is mongodb
 */
// const sessionStore = new MongoStore({
//   url: `${process.env.DB_CONNECTION}://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
//   autoReconnect: true
// });

/**
 * Config view engine for app
 * @param app from exactly express module
 */
const configSession = (app) => {
  app.use(session({
    key: 'express.sid',
    secret: 'mySecret',
    // store: sessionStore,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  }));
};

module.exports =  configSession;
