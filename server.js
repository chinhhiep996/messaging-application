const express = require('express');
const app = express();

const hostname = 'localhost';
const PORT = 8080;

app.get('hello', (req, res) => {
    res.send("<h1>Hello world !!!</h1>");
});

app.listen(PORT, hostname, () => {
    console.log('App running on port ' + hostname + ' ' + PORT);
});