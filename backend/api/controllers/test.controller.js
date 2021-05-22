var Test = require('../../models/test.model');

module.exports.index = async function(req, res) {
  var tests = await Test.find();
  res.json(tests);
};

module.exports.create = async function(req, res) {
  var test = await Test.create(req.body);
  res.json(test);
};