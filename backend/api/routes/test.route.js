var express = require('express');
var controller = require('../controllers/subjectDetail.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var test = await Test.findById(req.params.Id);
    res.json(test);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var tests = await Test.findByIdAndDelete(req.params.Id);
    res.json(tests)
});

module.exports = router;