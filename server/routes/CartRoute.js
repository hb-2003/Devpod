const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const CartController = require('../controllers/CartController.js');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/createCart', CartController.createCart);
app.put('/getCart', CartController.getCart);
app.get('/getCartById', CartController.getCartById);
app.put('/updateCart', CartController.updateCart);
app.delete('/deleteCart', CartController.deleteCart);

module.exports = app;
