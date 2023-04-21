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

//im going to add the port and server
const bookRoute = require("./backendNode/routes/book.routes");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false;
}));

app.use(cors());

//I am going to make a static path 
app.use(express.static(path.join(__dirname, 'dist/Bookstore')));

