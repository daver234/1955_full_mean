var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// Create an Express App
var app = express();
var moment = require('moment');
moment().format();
var bodyParser = require("body-parser");

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join(__dirname, './client/views')));

//app.set('views', path.join(__dirname, './client/views'));
// app.set('view engine', 'ejs');
// var routes_setter = require('./server/config/routes.js');
// routes_setter(app);

app.listen(8000, function() {
    console.log("listening on port 8000");
})
