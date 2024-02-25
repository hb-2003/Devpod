const express = require('express');
const UserRoute = require('./routes/UserRoute.js');
const ProductRoute = require('./routes/ProductRoute.js');
const SallerRoute = require('./routes/SallerRoute.js');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./config/db').connect();

app.use('/api/user', UserRoute);
app.use('/api/product', ProductRoute);
app.use('/api/saller', SallerRoute);


