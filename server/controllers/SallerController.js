const express = require('express');
const app = express();
const Saller = require('../model/SallerModel.js');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

exports.create = async (req, res) => {
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const mobile = req.body.mobile;
        const address = req.body.address;
        const city = req.body.city;
        const state = req.body.state;
        const country = req.body.country;
        const pincode = req.body.pincode;
        const saller = new Saller({
            name: name,
            email: email,
            password: password,
            mobile: mobile,
            address: address,
            city: city,
            state: state,
            country: country,
            pincode: pincode
        });

        if (saller) {
            res.status(201);
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}
exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const email = req.body.email;
        const password = req.body.password;
        if (email == null || password == null) {
            return res.status(400).send("Bad Request");
        }
        const saller = await Saller.findOne({ email: email, password: password });
        if (!saller) {
            return res.status(404).send("User not found");
        }
        return res.status(200).send(saller);
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
}