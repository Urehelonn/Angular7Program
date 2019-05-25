const sequelize = require('sequelize');

//db connected using sequelize
module.exports = new sequelize('thinkandread', 'root', 'example', {
  host: '127.0.0.1',
  dialect: 'mysql'
});