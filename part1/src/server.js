const express = require('express');
const routes = require('./routes');
const app = express();
const bodyParser = require('body-parser');
port = 3002;
app.use(bodyParser.json());
app.use(routes);
app.use(express.json());
app.listen(port);

console.log('Ok, está tudo funcionando na porta ' + port);

module.exports = app;
