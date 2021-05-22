var ExamDetail = require('../../models/examDetail.model');

module.exports.index = async function(req, res) {
  var examDetails = await ExamDetail.find();
  res.json(examDetails);
};

module.exports.create = async function(req, res) {
  var examDetail = await ExamDetail.create(req.body);
  res.json(examDetail);
};