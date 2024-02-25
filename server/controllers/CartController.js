const mongoose = require('mongoose');
const app = express();
const CartModel = require('../models/CartModel.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

exports.createCart = function (req, res) {
    try {
        const newCart = new CartModel(req.body);
        newCart.save(function (err, cart) {
            if (err) {
                res.status(500).send({ error: "Could not create cart" });
            }
            res.status(200).json(cart);
        });

    }
    catch (e) {
        res.status(500).send({ error: "Could not create cart" });

    }
}
exports.getCart = function (req, res) {
    try {
        const cart = CartModel.find({}, function (err, cart) {
            if (err) {
                res.status(500).send({ error: "Could not get cart" });
            }
            res.status(200).json(cart);
        });
    }
    catch (e) {
        res.status(500).send({ error: "Could not get cart" });
    }
}


exports.getCartById = function (req, res) {
    try {
        const cartid = req.params.id;
        const cart = CartModel.findById(cartid, function (err, cart) {
            if (err) {
                res.status(500).send({ error: "Could not get cart" });
            }
            res.status(200).json(cart);
        });
    }
    catch (e) {
        res.status(500).send({ error: "Could not get cart" });
    }
}
exports.updateCart = function (req, res) {
    try {
        const cartid = req.body.cartId;
        const cart = CartModel.findByIdAndUpdate(cartid, req.body, function (err, cart) {
            if (err) {
                res.status(500).send({ error: "Could not update cart" });
            }
            res.status(200).json(cart);
        });
    }
    catch (e) {
        res.status(500).send({ error: "Could not update cart" });
    }
}
exports.deleteCart = function (req, res) {
    try {
        const cartid = req.body.cartId;
        const cart = CartModel.findByIdAndRemove(cartid, function (err, cart) {
            if (err) {
                res.status(500).send({ error: "Could not delete cart" });
            }
            res.status(200).json(cart);
        });
    }
    catch (e) {
        res.status(500).send({ error: "Could not delete cart" });
    }
}
module.exports = app;
