'use strict';

var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
//routes
var index = require('./routes/index');
var auth = require('./routes/auth');
var users = require('./routes/users');
var manufacturers = require('./routes/manufacturers');
var categories = require('./routes/categories');
var products = require('./routes/products');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());

app.use('/', index);
app.use('/auth', auth);
app.use('/users', users);
app.use('/manufacturers', manufacturers);
app.use('/categories', categories);
app.use('/products', products);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

  res.json({ errorMessage: err.message });
});

module.exports = app;
//# sourceMappingURL=app.js.map