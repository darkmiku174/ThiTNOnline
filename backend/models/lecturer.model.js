var mongoose = require('mongoose');

var lecturerSchema  = new mongoose.Schema({
    MaGV: String,
    CMND: String,
    Password: String,
    Activate: Number
});

var Lecturer = mongoose.model('Lecturers', lecturerSchema, 'lecturers');

module.exports = Lecturer;