var mongoose = require('mongoose');

var testSchema  = new mongoose.Schema({
    MaBT:String,
    MaDe: String,
    MaSV: String,
    ThoiGianNopBai: String
});

var Test = mongoose.model('Tests', testSchema, 'tests');

module.exports = Test;