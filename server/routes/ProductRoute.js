const express = require('express');
const app = express();
const ProductController = require('../controllers/ProductController');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/createProduct', ProductController.createProduct);
app.post('/updateProduct/:id', ProductController.updateProduct);

// app.get('/getProduct', ProductController.getProduct);
// app.get('/getProductById', ProductController.getProductById);
// app.put('/updateProduct', ProductController.updateProduct);
// app.delete('/deleteProduct', ProductController.deleteProduct);
module.exports = app;
