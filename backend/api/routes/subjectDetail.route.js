var express = require('express');
var controller = require('../controllers/subjectDetail.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var subjectDetail = await SubjectDetail.findById(req.params.Id);
    res.json(subjectDetail);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var subjectDetails = await SubjectDetail.findByIdAndDelete(req.params.Id);
    res.json(subjectDetails)
});

module.exports = router;