
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const User = require('../model/UserModel');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


exports.createUser = async (req, res) => {
    const date = new Date();


    console.log(req.body);
    console.log(req.body.mobile);
    try {
        const firstName = req.body.firstName;
        const middleName = req.body.middleName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const birthdate = req.body.birthdate;
        const mobile = req.body.mobile;
        const user = new User({
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            email: email,
            password: password,
            birthdate: birthdate,
            mobile: mobile,
            date: date
        });

        if (user) {
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
        const user = await User.findOne({ email: email, password: password });
        if (!user) {
            return res.status(404).send("User not found");
        }
        
        return res.send(user);

    }
    catch (e) {
        console.error(e);
        res.status(500).send("Internal Server Error");
    }


}

exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const firstName = req.body.firstName;
        const middleName = req.body.middleName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const password = req.body.password;
        const birthdate = req.body.birthdate;
        const mobile = req.body.mobile;

        console.log(user);
    } catch (e) {
        console.error(e);
        res.status(400).send(e.message || "Bad Request");
    }
}
