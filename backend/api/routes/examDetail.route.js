var express = require('express');
var controller = require('../controllers/subjectDetail.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var examDetail = await ExamDetail.findById(req.params.Id);
    res.json(examDetail);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var examDetails = await ExamDetail.findByIdAndDelete(req.params.Id);
    res.json(examDetails)
});

module.exports = router;