var express = require('express');
var controller = require('../controllers/subjectDetail.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var testDetail = await TestDetail.findById(req.params.Id);
    res.json(testDetail);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var testDetails = await TestDetail.findByIdAndDelete(req.params.Id);
    res.json(testDetails)
});

module.exports = router;