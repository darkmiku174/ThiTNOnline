var People = require('../../models/people.model');

module.exports.index = async function(req, res) {
  var people = await People.find();
  res.json(people);
};

module.exports.create = async function(req, res) {
  var human = await People.create(req.body);
  res.json(human);
};