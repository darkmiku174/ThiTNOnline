var mongoose = require('mongoose');

var testDetailSchema  = new mongoose.Schema({
    MaCTBT:String,
    MaBT:String,
    MaCH: Array,
    DapAnSV: Array,
});

var TestDetail = mongoose.model('TestDetails', testDetailSchema, 'testDetails');

module.exports = TestDetail;