var express = require('express');
var controller = require('../controllers/student.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var student = await Student.findById(req.params.Id);
    res.json(student);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var students = await Student.findByIdAndDelete(req.params.Id);
    res.json(students)
});

module.exports = router;