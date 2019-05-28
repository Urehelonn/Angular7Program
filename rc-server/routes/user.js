const express = require('express');
const route = express.Router();
const db = require('../config/database');
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

// GET: /api/user/:id   return user with the id
// route.post('/:id',(req,res)=>{
//     let userid = req.params.id;
//     User.findOne({
//         where: {id: userid}
//     }).then(user=>{
//         if(user==null) {
//             res.sendStatus(404);
//             res.send('user not found');
//         }
//         else{
//             res.send({user});
//         }
//     }).catch(err=>console.log(err));
// });

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

//DELETE: /api/user/:id  delete user with id
// route.post('/:id',(req,res)=>{
//     let id = req.params.id
//     User.findOne({
//         where: {id=id}
//     }).then(dUser=>{
//         console.log(dUser.id+' deleted');
//         //res.redirect('');
//     }).catch(err=>console.log(err));
// });

//

module.exports = route;