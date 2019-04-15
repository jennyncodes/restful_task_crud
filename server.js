var express = require('express');
var mongoose= require('mongoose');
const bodyParser= require('body-parser');
var path = require('path');


var app= express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.use(express.static( __dirname + '/public/dist/public' ));



mongoose.Promise = global.Promise;


require('./server/config/mongoose.js');

var router = require('./server/config/routes.js');
router(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
})




