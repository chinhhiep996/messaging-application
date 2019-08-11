'use strict'

import express from 'express';
import bodyParser from 'body-parser';
import connectFlash from 'connect-flash';

require('dotenv').config();

import connectDB from './config/connectDB';
import configViewEngine from './config/viewEngine';
import initRoutes from './routes/web';
import configSession from './config/session';

// Init app
const app = express();

// Connect to MongoDB
connectDB();

// Connect session
configSession(app);

// Config view engine
configViewEngine(app);

// Enable post data for request
app.use(bodyParser.urlencoded({ extended: true }));

// Enable flash messages
app.use(connectFlash());

// Init all routes
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('App running on port http://' + process.env.APP_HOST + ':' + process.env.APP_PORT);
});
