var mongoose = require('mongoose');

var peopleSchema  = new mongoose.Schema({
    CMND: String,
    HoTen: String,
    NgaySinh: String,
    GioiTinh: Number,
    AnhDaiDien: String,
    GhiChu: String
});

var People = mongoose.model('People', peopleSchema, 'people');

module.exports = People;