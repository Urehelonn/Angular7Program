//======================= CONFIG =============================
const express = require('express');
const app = express();
const http = require('http');
const bodyparser = require('body-parser');
const db = require('./config/database');
//will be used when refactor the routes.
//const server = http.createServer(app);
const port = process.env.PORT || 3000;
//bodyparser set up to get data from req
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.set('port', port);

//========================== ROUTES ==========================
//user routes
app.use('/api/user',require('./routes/user'));


//test if db connected
db.authenticate()
.then(()=>console.log('db connected'))
.catch(err=>console.log('db err! '+err));


app.route('/api').get((req, res) => {    
    res.send({
        message:'hi, this iis the main page'
    });
})

app.route('/api/users').get((req, res) => {
    var users=[
        {id: 'qwe0', password:'qwe123'},
        {id: 'qwe1', password:'qwe123'},
        {id: 'qwe2', password:'qwe123'}
    ];
    res.send({
        message: "first as fake, second from db.",
        users: users,
    });
})


//======================== Server Listener ============================
app.listen(port, () => {
    console.log('Server started! '+port);
})