var Exam = require('../../models/exam.model');

module.exports.index = async function(req, res) {
  var exams = await Exam.find();
  res.json(exams);
};

module.exports.create = async function(req, res) {
  var exam = await Exam.create(req.body);
  res.json(exam);
};