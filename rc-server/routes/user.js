const express = require('express');
const route = express.Router();
const db = require('../config/database');
const User = require('../models/user');

route.get('/',(req,res)=>{
    User.findAll()
     .then(users => {
         console.log(users);
         res.send(users);
         res.sendStatus(200);
     })
     .catch(err=>console.log(err));
});

module.exports = route;