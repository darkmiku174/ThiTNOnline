var SubjectDetail = require('../../models/subjectDetail.model');

module.exports.index = async function(req, res) {
  var subjectDetails = await SubjectDetail.find();
  res.json(subjectDetails);
};

module.exports.create = async function(req, res) {
  var subjectDetail = await SubjectDetail.create(req.body);
  res.json(subjectDetail);
};
