var mongoose = require('mongoose');

var studentSchema  = new mongoose.Schema({
    MaSV: String,
    CMND: String,
    Password: String,
    Activate: Number
});

var Student = mongoose.model('Students', studentSchema, 'students');

module.exports = Student;