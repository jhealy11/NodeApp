'use strict';

const UserConnection = require('../models/userSchema');
let users = [];


exports.createUser = async function (req, res) {
    var userInfo = req.body;

    try {
        const newUser = new UserConnection({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            emailAddress: userInfo.lastName,
            phone: userInfo.phone
        });

        const createdUser = await newUser.save();


        res.send("New User " + newUser.firstName + " successfully added.");
    }
    catch (err) {
        res.send(err);
    };
};

exports.getUsers = async function (req, res) {

    try {
        const users = await UserConnection.find();

        res.send(users);
    }
    catch (err) {
        res.send(err);
    };
};

exports.getUser = async function (req, res) {
    try {
        const requestId = req.params;
        const foundUser = await UserConnection.findById(requestId.id);

        res.send(foundUser);
    }
    catch (err) {
        res.send(err);
    };
};

exports.deleteUser = function (req, res) {
    try {
        const { id } = req.params;

        users = users.find((user) => user.Id !== id);

        res.send("User with Id " + id + " deleted");
    }
    catch (err) {
        res.send(err);
    };
};

exports.updateUser = async function (req, res) {
    try {

        const { id } = req.params;
        const { phone } = req.body;

        const foundUser = await UserConnection.findById(id);
        foundUser.phone = phone;

        const savedUser = await foundUser.save();

        res.send("User with Id " + id + " updated.");
    }
    catch (err) {
        res.send(err);
    };
};
