const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user',{
  id:{type: sequelize.STRING, primaryKey:true},
  password:{type: sequelize.STRING},
});

module.exports=User;