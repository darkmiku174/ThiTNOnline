require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var apiQuestionRoute = require('./api/routes/question.route');
var apiPeopleRoute = require('./api/routes/people.route');
var apiStudentRoute = require('./api/routes/student.route');
var apiLecturerRoute = require('./api/routes/lecturer.route');
var apiSubjectRoute = require('./api/routes/subject.route');
var apiStudent_subjectRoute = require('./api/routes/subjectDetail.route');
var apiExamRoute = require('./api/routes/exam.route');
var apiExamDetailRoute = require('./api/routes/examDetail.route');
var apiTestRoute = require('./api/routes/test.route');
var apiTestDetailRoute = require('./api/routes/testDetail.route');


var port = 5000;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/questions', apiQuestionRoute);
app.use('/api/people', apiPeopleRoute);
app.use('/api/students', apiStudentRoute);
app.use('/api/lecturers', apiLecturerRoute);
app.use('/api/subjects', apiSubjectRoute);
app.use('/api/subjectDetails', apiStudent_subjectRoute);
app.use('/api/exams', apiExamRoute);
app.use('/api/examDetails', apiExamDetailRoute);
app.use('/api/tests', apiTestRoute);
app.use('/api/testDetails', apiTestDetailRoute);

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});