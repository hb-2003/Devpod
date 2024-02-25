const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProductCategoryController = require('../controllers/ProductCategoryController.js');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.post('/createCategory', ProductCategoryController.createCategory);
app.get('/getCategory', ProductCategoryController.getCategory);
app.get('/getCategoryById', ProductCategoryController.getCategoryById);
app.put('/updateCategory', ProductCategoryController.updateCategory);
app.delete('/deleteCategory', ProductCategoryController.deleteCategory);

module.exports = app;
