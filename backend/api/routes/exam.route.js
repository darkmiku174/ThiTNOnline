var express = require('express');
var controller = require('../controllers/exam.controller');
var Exam = require('../../models/exam.model');

var router = express.Router();

router.get('/', controller.index);

router.get('/:id', async function (req, res) {
  var exam = await Exam.findById(req.params.id);
  res.json(exam);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
  var exams = await Exam.findByIdAndDelete(req.params.Id);
  res.json(exams)
});

module.exports = router;
