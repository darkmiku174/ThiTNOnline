import mongoose from 'mongoose'

var examSchema = new mongoose.Schema({
  // _id sẽ được tự thêm vào nên không cần bỏ vô schema nữa
  ThoiGian: String,
  NgayThi: Date,
  ThoiLuong: Number,
  CTMH: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SubjectDetail"
  },
  DSCH: [{
    _id: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
  }]
})

// var Exam = mongoose.model("Exams", examSchema, 'exams')
// Ông có thể chuyển về như thế này
// Chú ý "s" ở phần này nhé, cái trong dấu "" phải giống với cái export đấy
const Exam = mongoose.model("Exam", examSchema)

export default Exam
