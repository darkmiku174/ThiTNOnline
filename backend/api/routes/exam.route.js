var express = require('express');
var controller = require('../controllers/exam.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var exam = await Exam.findById(req.params.Id);
    res.json(exam);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var exams = await Exam.findByIdAndDelete(req.params.Id);
    res.json(exams)
});

module.exports = router;