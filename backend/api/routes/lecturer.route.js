var express = require('express');
var controller = require('../controllers/lecturer.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var lecturer = await Lecturer.findById(req.params.Id);
    res.json(lecturer);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var lecturers = await Lecturer.findByIdAndDelete(req.params.Id);
    res.json(lecturers)
});

module.exports = router;