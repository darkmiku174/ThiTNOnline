var Question = require('../../models/question.model');

module.exports.index = async function(req, res) {
  var questions = await Question.find();
  res.json(questions);
};

module.exports.create = async function(req, res) {
  var question = await Question.create(req.body);
  res.json(question);
};
