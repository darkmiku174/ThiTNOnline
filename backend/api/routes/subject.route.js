var express = require('express');
var controller = require('../controllers/subject.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var subject = await Subject.findById(req.params.Id);
    res.json(subject);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var subjects = await Subject.findByIdAndDelete(req.params.Id);
    res.json(subjects)
});

module.exports = router;