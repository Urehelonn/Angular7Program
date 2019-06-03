const express = require('express');
//const sequelize = require('sequelize');
const route = express.Router();
//const db = require('../config/database');   //this takes the thinkandread database via sequelize connection
const User = require('../models/user');
const bodyparser = require('body-parser');

//bodyparser set
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({ extended: false }));

//get all controllers
const UserController = require('../controllers/user/userController')

// GET: api/user/ return all users
route.get('/',UserController.getAllUsers);

// GET: /api/user/:id   return user with the id
route.get('/:id',UserController.getUserWithId);

//POST: /api/user/  create new user
//avoid duplicate userid function is needed in user controller
route.post('/',UserController.addNewUser);

//DELETE: /api/user/:id  delete user with id
route.delete('/:id',UserController.deleteUserWithId);

//PUT: /api/user/:id     update user with id, using a provided user;
route.put('/:id',UserController.updateUser);


module.exports = route;