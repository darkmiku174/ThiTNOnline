var express = require('express');
const Question = require('../../models/question.model');

var controller = require('../controllers/question.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var question = await Question.findById(req.params.Id);
    res.json(question);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var questions = await Question.findByIdAndDelete(req.params.Id);
    res.json(questions)
});

module.exports = router;