// routes/UserRoute.js

const express = require('express');
const app = express();
const SallerController = require('../controllers/SallerController.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post('/sallercreate', SallerController.create);
app.post('/sallerlogin', SallerController.login);
module.exports = app;
