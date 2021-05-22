var express = require('express');
var controller = require('../controllers/people.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:Id', async function (req, res) {
    var human = await People.findById(req.params.Id);
    res.json(human);
});
router.post('/', controller.create);

router.delete('/:Id', async function (req, res) {
    var people = await People.findByIdAndDelete(req.params.Id);
    res.json(people)
});

module.exports = router;