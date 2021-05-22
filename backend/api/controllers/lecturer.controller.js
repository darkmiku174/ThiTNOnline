var Lecturer = require('../../models/lecturer.model');

module.exports.index = async function(req, res) {
  var lecturers = await Lecturer.find();
  res.json(lecturers);
};

module.exports.create = async function(req, res) {
  var lecturer = await Lecturer.create(req.body);
  res.json(lecturer);
};