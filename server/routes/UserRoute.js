// routes/UserRoute.js

const express = require('express');
const app = express();
const UserController = require('../controllers/UserControllers');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/users', UserController.createUser);
 
app.post('/login', UserController.login);
app.put('/users/:id', UserController.updateUser);

module.exports = app;
