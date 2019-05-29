const express = require('express');
//const sequelize = require('sequelize');
const route = express.Router();
//const db = require('../config/database');   //this takes the thinkandread database via sequelize connection
const User = require('../models/user');
const bodyparser = require('body-parser');

//bodyparser set
route.use(bodyparser.json());
route.use(bodyparser.urlencoded({ extended: false }));

// GET: api/user/ return all users
route.get('/',(req,res)=>{
    User.findAll()
     .then(users => {
         //console.log(users);
         res.status(200).send(users);
     })
     .catch(err=>console.log(err));
});

//POST: /api/user/  create new user
route.post('/',(req,res)=>{
    let newUser = {
        id: 'this',
        password: 'foo'
    }
    //let newUser = req.body.newUser;
    User.create({
        id: newUser.id,
        password: newUser.password
    }).then(nUser=>{
        console.log(nUser);
        //res.redirect('/');
        res.send(nUser);
    }).catch(err=>console.log(err));
});

// GET: /api/user/:id   return user with the id
route.get('/:id',(req,res)=>{
    let userid = req.params.id;
    User.findAll({
        limit: 1,
        where: {id: userid},
    }).then(user=>{
        if(user==null) {
            res.status(404).send('user not found');
        }
        else{
            console.log(user);
            res.send({user});
        }
    }).catch(err=>console.log(err));
});

//DELETE: /api/user/:id  delete user with id
route.delete('/:id',(req,res)=>{
    let userid = req.params.id;
    User.destroy({
        limit: 1,
        where: {id: userid},
    }).then(userCount=>{
        if(userCount!=1) {
            res.status(400).send('something wrong with the number of deleted user: '+userCount);
        }
        else{
            console.log(userCount);
            //deleted user info confirm
            res.send({userCount});
        }
    }).catch(err=>console.log(err));
});

//UPDATE: /api/user/:id     update user with id, using a provided user;
route.put('/:id',(req,res)=>{
    let userid = req.params.id;
    let newUserContent = {
        id: 'balabalaba',
        password: 'foo'
    };
    Book.update(
        {id:newUserContent.id,
        password:newUserContent.password},
        {where: {id:userid}}
      )
      .then(userUpdated=> {
        if(userUpdated==null) {
            res.status(401).send('user with id not found: '+userUpdated);
        }
        else{
            console.log(userUpdated);
            //deleted user info confirm
            res.send({userUpdated});
        }
      })
      .catch(err=>{
          res.send(err);
      });
});


module.exports = route;