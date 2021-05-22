var Subject = require('../../models/subject.model');

module.exports.index = async function(req, res) {
  var subjects = await Subject.find();
  res.json(subjects);
};

module.exports.create = async function(req, res) {
  var subject = await Subject.create(req.body);
  res.json(subject);
};
