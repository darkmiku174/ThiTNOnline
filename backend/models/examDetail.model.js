var mongoose = require('mongoose');

var examDetailSchema  = new mongoose.Schema({
    MaCTDe: String,
    MaDe: String,
    MaCTMH: String,
    MaCH: Array,
});

var ExamDetail = mongoose.model('ExamDetails', examDetailSchema, 'examDetails');

module.exports = ExamDetail;