var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();
let userRouter= require('./routes/users.routes');
let deptRouter= require('./routes/dept.routes');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) => {
    res.send({ error: false, message: "Welcome to Demo2" });
});

app.use('/user',userRouter);
app.use('/dept',deptRouter);


module.exports = app;
