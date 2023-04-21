// im going to write out the connection code for our db

let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongoDB = require('./database/db');

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB.bookstore, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("Database connected successfully")
},
    error => {
        console.log('Database error: ' + error)
    }
)