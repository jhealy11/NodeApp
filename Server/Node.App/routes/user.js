'use strict';
const { request } = require('express');
var express = require('express');
var router = express.Router();

//const { route } = require('.');

var users = require('../controllers/user');

//let users = [];

/* GET users listing. */
router.get('/', users.getUsers);

router.post('/', users.createUser);

router.get('/:id', users.getUser);

router.delete('/:id', users.deleteUser);

router.patch('/:id', users.updateUser);

module.exports = router;
