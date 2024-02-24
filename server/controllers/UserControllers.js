const User = require('../model/UserModel');
// const jwt = require("jsonwebtoken");
const express = require('express');
const mongoose = require('mongoose');

exports.register = async (req, res) => {
    try {
        const users = new user(req.body);
        await users.save();
        res.status(201).send(users);
    }
    catch (e) {
        res.status(400).send(e);
    }
}

exports.login = async (req, res) => {
    //jwt token
    try {
        const users = await user.find({ email: req.body.email, password: req.body.password });
        if (users) {
            res.status(200).send(users);
        }
        else {
            res.status(404).send("User not found");
        }
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }

}
exports.updateUser = async (req, res) => {
    try {
        const users = await user.findByIdAndUpdate
            (req.params.id, req.body, { new: true, runValidators: true });
        if (!users) {
            return res.status(404).send();
        }
        res.send(users);
    }
    catch (e) {
        res.status(400).send(e);
    }
}
