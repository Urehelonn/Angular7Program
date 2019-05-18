const express = require('express');
const app = express();

app.use('/api/users',(req,res, next)=>{
    const user = [
        {id: 'qwer', password: 'qwer123'},
        {id: 'qwer0', password: 'qwer123'},
        {id: 'qwer00', password: 'qwer123'},
    ];
    res.status(200).json({
        message: 'user data fetched',
        users: user
    });
    res.send('this is from app.js, with login route');
});

module.exports = app;