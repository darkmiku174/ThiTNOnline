var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
  MaMH: { type: String, required: true },
  PhanHoi: { type: String, required: true },
  CauA: { type: String, required: true },
  CauB: { type: String, required: true },
  CauB: { type: String, required: true },
  CauC: { type: String, required: true },
  CauD: { type: String, required: true },
  DapAn: { type: String, required: true },
  ThangDiem: { type: Number, required: true },
  PhanLoai: { type: Number, required: true },
});

var Question = mongoose.model("Questions", questionSchema, "questions");

module.exports = Question;
