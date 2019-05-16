const express = require('express');
const app = express();

app.use((req,res, next)=>{
    res.send('this is from app.js');
});

module.exports = app;