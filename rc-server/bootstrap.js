const express = require('express');
const app = express();
const http = require('http');
const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
// const sequelize = new Sequelize('think_and_read', 'root', 'example', {
//   host: '127.0.0.1',
//   dialect: 'mysql'
// });

// const Users = sequelize.define('users', {
//   id: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     primaryKey: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

// Users.sync({ force: true }).then(() => {
//   // Now the `users` table in the database corresponds to the model definition
//   return Users.create({
//     id: 'qwe',
//     password: '12345'
//   });
// });