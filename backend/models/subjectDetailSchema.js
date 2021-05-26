import mongoose from 'mongoose'

const subjectDetailSchema = new mongoose.Schema({
  MonHoc: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },
  GiangVien: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lecturer"
  },
  DSSV: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  }]
})

var SubjectDetail = mongoose.model("SubjectDetail", subjectDetailSchema)

export default SubjectDetail
