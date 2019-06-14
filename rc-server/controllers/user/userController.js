const User = require('../../models/user');

// GET: api/user/ return all users
exports.getAllUsers = (req,res)=>{
    User.findAll()
     .then(users => {
         //console.log(users);
         res.status(200).send(users);
     })
     .catch(err=>console.log(err));
}

// GET: /api/user/:id   return user with the id
exports.getUserWithId = (req,res)=>{
    let userid = req.params.id;
    User.findOne({  
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
}

//POST: /api/user/  create new user
//avoid duplicate userid function is needed in user controller
exports.addNewUser = (req,res)=>{
    let newUser = {
        id: 'this',
        password: 'foo'
    }
    //let newUser = req.body.newUser;

    //check first if user id exist
    if(User.findAll(
        {where: {id:newUser.id}}
    )==null){
        User.create({
            id: newUser.id,
            password: newUser.password
        }).then(nUser=>{
            console.log(nUser);
            //res.redirect('/');
            res.send(nUser);
        }).catch(err=>console.log(err));
    }
    else{
        res.send('user with id: '+newUser.id+' already exist')
    }    
}

//DELETE: /api/user/:id  delete user with id
exports.deleteUserWithId = (req,res)=>{
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
}

//PUT: /api/user/:id     update user with id, using a provided user;
exports.updateUser = (req,res)=>{
    let userid = req.params.id;
    let newUserContent = {
        id: 'balabalaba',
        password: 'foo'
    };
    User.update(
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
}