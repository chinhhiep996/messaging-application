import express from 'express';
import connectDB from './config/connectDB';
import configViewEngine from './config/viewEngine';

// Init app
const app = express();

// Connect to MongoDB
connectDB();

// Config view engine
configViewEngine(app);

app.get('/', (req, res) => {
  res.render("main/master");
});


app.get('/login', (req, res) => {
  res.render("auth/loginRegister");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('App running on port http://' + process.env.APP_HOST + ':' + process.env.APP_PORT);
});
