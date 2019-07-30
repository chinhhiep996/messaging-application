import express from 'express';
import connectDB from './config/connectDB';

const app = express();

// Connect to MongoDB
connectDB();

app.get('/hello', (req, res) => {
  res.send("<h1>Hello world !!!</h1>");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('App running on port http://' + process.env.APP_HOST + ':' + process.env.APP_PORT);
});
