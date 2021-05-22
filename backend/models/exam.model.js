var mongoose = require('mongoose');

var examSchema  = new mongoose.Schema({
    MaDe: String,
    ThoiGian: String,
    NgayGioThi: String,
    ThoiLuong: Number
});

var Exam = mongoose.model('Exams', examSchema, 'exams');

module.exports = Exam;