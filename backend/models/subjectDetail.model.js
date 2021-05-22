var mongoose = require('mongoose');

var subjectDetailSchema  = new mongoose.Schema({
    MaCTMH:String,
    MaMH: String,
    MaGV: String,
    MaSV: Array,
});

var SubjectDetail = mongoose.model('SubjectDetails', subjectDetailSchema, 'subjectDetails');

module.exports = SubjectDetail;