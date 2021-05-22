var Student = require('../../models/student.model');

module.exports.index = async function(req, res) {
  var students = await Student.find();
  res.json(students);
};

module.exports.create = async function(req, res) {
  var student = await Student.create(req.body);
  res.json(student);
};
