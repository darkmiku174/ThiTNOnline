var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
  MaMH: String,
  PhanHoi: String,
  CauA: String,
  CauB: String,
  CauB: String,
  CauC: String,
  CauD: String,
  DapAn: String,
  Diem: Number,
});

var Question = mongoose.model("Questions", questionSchema, "questions");

module.exports = Question;

