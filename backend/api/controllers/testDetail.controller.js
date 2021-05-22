var TestDetail = require('../../models/testDetail.model');

module.exports.index = async function(req, res) {
  var testDetails = await TestDetail.find();
  res.json(testDetails);
};

module.exports.create = async function(req, res) {
  var testDetail = await TestDetail.create(req.body);
  res.json(testDetail);
};