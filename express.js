var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('hbs');
var xFrameOptions = require('x-frame-options')
var helmet = require('helmet');
var session = require('express-session');
var routes = require('./routes/index');
//var passport = require('passport');
var flash    = require('connect-flash');
var app = express();

//var MongoDBStore = require('connect-mongodb-session')(session);
/*
require('./config/passport.js')(passport);*/
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', hbs.__express);



app.use(xFrameOptions())
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(helmet());

//app.use(passport.initialize());
//app.use(passport.session());

//app.use(flash());


//app.use(favicon(__dirname + '/views/favicon.ico'));
app.use(function(req, res, next) {
  console.log(req.get("origin"), req.get("Origin"), req.get("referer"), req.get("Referer") );
  res.setHeader("Access-Control-Allow-Origin", "https://example.com");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/test", function(req,res){
    res.render('test');
})

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send("An error has occured. Please report this error via the support forum.")
});

module.exports = app;
