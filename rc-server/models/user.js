const sequelize = require('sequelize');
const db = require('../config/database');

//this extract user table from thinkandread db 
const User = db.define('user',{
  id:{
    type: sequelize.STRING,
    primaryKey:true,
    unique: true,
    allowNull: false
  },
  password:{
    type: sequelize.STRING,
    allowNull:false
  },
},{
  timestamps: false,
});

module.exports=User;