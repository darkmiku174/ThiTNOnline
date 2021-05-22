var mongoose = require('mongoose');

var subjectSchema  = new mongoose.Schema({
    MaMH: String,
    TenMH: String
});

var Subject = mongoose.model('Subjects', subjectSchema, 'subjects');

module.exports = Subject;