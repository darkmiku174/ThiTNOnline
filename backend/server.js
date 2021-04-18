require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var apiQuestionRoute = require('./api/routes/question.route');

var port = 5000;

var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/questions', apiQuestionRoute);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});