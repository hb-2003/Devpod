const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ProductCategoryModel = require('../model/ProductCategoryModel.js');

const router = express();
router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());

exports.createCategory = async (req, res) => {
    try {
        const name = req.body.name;
        const status = req.body.status;
        const category = new ProductCategoryModel({
            name: name,
            status: status
        });
        if (category) {
            res.status(201);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}
exports.getCategory = async (req, res) => {
    try {
        const category = await ProductCategoryModel.find();
        if (category) {
            res.status(200).send(category);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}

exports.getCategoryById = async (req, res) => {
    try {
        const category = await ProductCategoryModel.findById(req.params.id);
        if (category) {
            res.status(200).send(category);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}
exports.updateCategory = async (req, res) => {
    try {
        const category = await ProductCategoryModel.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            status: req.body.status
        });
        if (category) {
            res.status(200).send(category);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}
exports.deleteCategory = async (req, res) => {
    try {
        const category = await ProductCategoryModel.findByIdAndDelete(req.params.id);
        if (category) {
            res.status(200).send(category);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}
module.exports = router;

