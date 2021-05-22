var mongoose = require('mongoose');

var questionSchema  = new mongoose.Schema({
    MaCH: String,
    MaMH: String,
	PhanHoi: String,
	CauA: String,
	CauB: String,
    CauB: String,
    CauC: String,
    CauD: String,
    DapAn: Array,
    Diem: Number,
    PhanLoai: Number
});

var Question = mongoose.model('Questions', questionSchema, 'questions');

module.exports = Question;