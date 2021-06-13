import mongoose from 'mongoose'

const questionSchema = mongoose.Schema({
  MonHoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  PhanHoi: String,
  CauA: String,
  CauB: String,
  CauB: String,
  CauC: String,
  CauD: String,
  DapAn: String,
  Diem: Number,
  PhanLoai: Number
});

var Question = mongoose.model('Question', questionSchema);

export default Question
