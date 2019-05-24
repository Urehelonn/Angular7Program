const express = require('express');
const app = express();
const http = require('http');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

//bodyparser set up to get data from req
app.use(bodyparser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', port);

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


app.route('/api/login').get((req, res) => {
    var users=[
        {id: 'qwe0', password='qwe123'},
        {id: 'qwe1', password='qwe123'},
        {id: 'qwe2', password='qwe123'}
    ];
    res.send({
        message: "This is a msg.",
        users: users
    });
})


//======================== Server Listener ============================
app.listen(8000, () => {
    console.log('Server started!');
})``