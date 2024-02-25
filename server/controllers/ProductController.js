const express = require('express');
const router = express();
const Saller = require('../model/SallerModel.js');
const Product = require('../model/ProductModel.js');
const Productimage = require('../model/ProductImageModel.js');
const Productcategory = require('../model/ProductCategoryModel.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({
    extended: true
}));
router.use(bodyParser.json());
exports.createProduct = async (req, res) => {
    try {
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const image = req.body.image;
        const startdate = req.body.startdate;
        const expairitydate = req.body.expairitydate;
        const quantity = req.body.quantity;
        const categorydetail = Productcategory.findById(req.body.category)
        const category = categorydetail.id;

        const status = req.body.status;
        const sallerid = req.body.sallerid;
        if (!name || !price || !description || !image || !startdate || !expairitydate || !quantity || !category || !status || !createdBy) {
            return res.status(400).send({
                message: "Required field can not be empty"
            });
        }
        const product = new Product({
            name: name,
            price: price,
            description: description,
            startdate: startdate,
            expairitydate: expairitydate,
            quantity: quantity,
            category: category,
            status: status,
            sallerid: sallerid
        });

        if (product.save() == true) {
            while (image.length > 0) {
                const productimage = new Productimage({
                    productid: product.id,
                    image: image.pop()

                });
                productimage.save();
            }
        }
        return res.status(200).send({
            message: "Product created successfully"
        });
    }
    catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });
    }
}
exports.updateProduct = async (req, res) => {
    try {

        const id = req.params.id;
        const product = Product.findById(id);
        if (!product) {
            return res.status(404).send({
                message: "Product not found"
            });
        }
        const images = Productimage.find({ productid: id });
        while (images.length > 0) {
            if (productimage.find({ productid: id })) {
                productimage.deleteOne();
            }
        }
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const image = req.body.image;
        const startdate = req.body.startdate;
        const expairitydate = req.body.expairitydate;
        const quantity = req.body.quantity;
        const category = req.body.category;
        const status = req.body.status;
        const sallerid = req.body.sallerid;
        if (!name || !price || !description || !image || !startdate || !expairitydate || !quantity || !category || !status || !createdBy) {
            return res.status(400).send({
                message: "Required field can not be empty"
            });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        product.startdate = startdate;
        product.expairitydate = expairitydate;
        product.quantity = quantity;
        product.category = category;
        product.status = status;
        product.sallerid = sallerid;
        product.updated = Date.now();
        product.save();

        if (product.save() == true) {
            while (image.length > 0) {
                const productimage = new Productimage({
                    productid: product.id,
                    image: image.pop()

                });
                productimage.save();
            }
        }

        return res.status(200).send({
            message: "Product updated successfully"
        });
    }
    catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while updating the Product."
        });
    }
}
exports.updateProduct = async (req, res) => {
    try {

        const id = req.params.id;

        const product = Product.findById(id);
        if (!product) {
            return res.status(404).send({
                message: "Product not found"
            });
        }
        const images = Productimage.find({ productid: id });
        while (images.length > 0) {
            if (productimage.find({ productid: id })) {
                productimage.deleteOne();
            }
        }
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;
        const image = req.body.image;
        const startdate = req.body.startdate;
        const expairitydate = req.body.expairitydate;
        const quantity = req.body.quantity;
        const category = req.body.category;
        const status = req.body.status;
        const sallerid = req.body.sallerid;
        if (!name || !price || !description || !image || !startdate || !expairitydate || !quantity || !category || !status || !createdBy) {
            return res.status(400).send({
                message: "Required field can not be empty"
            });
        }
        product.name = name;
        product.price = price;
        product.description = description;
        product.startdate = startdate;
        product.expairitydate = expairitydate;
        product.quantity = quantity;
        product.category = category;
        product.status = status;
        product.sallerid = sallerid;
        product.updated = Date.now();
        product.save();

        if (product.save() == true) {
            while (image.length > 0) {
                const productimage = new Productimage({
                    productid: product.id,
                    image: image.pop()

                });
                productimage.save();
            }
        }

        return res.status(200).send({
            message: "Product updated successfully"
        });
    }
    catch (err) {
        return res.status(500).send({
            message: err.message || "Some error occurred while updating the Product."
        });
    }
}

