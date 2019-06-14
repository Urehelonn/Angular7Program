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

//allow client-side access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//port setup
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
        message:'hi, this is the main api'
    });
})

//======================== Server Listener ============================
app.listen(port, () => {
    console.log('Server started! '+port);
})