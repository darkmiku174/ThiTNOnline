import asyncHandler from "express-async-handler";
import Exam from '../models/examSchema.js'

// @descs   Fetch all  exam
// @route   GET /api/exams
// @access  Public
// Dùng asyncHanlder để server không dừng khi gặp lỗi, thích thì dùng try catch cũng đc
const getExams = asyncHandler(async (req, res) => {
  // Ví dụ cho populate, sau này sẽ còn thêm nhiều populate khác vào nữa
  // Khỏi cần populate danh sách câu hỏi, nhưng cần có route riêng để lấy danh sách câu hỏi với query là mảng câu hỏi
  // Cứ làm model cho xong đi rồi t tìm hiểu sau
  const exams = await Exam.find({})
    .populate(
      {
        path: "CTMH", select: "GiangVien",
        // Đây là populate của Chi tiết môn học
        // Muốn populate cái nào thì phải định nghĩa model, controller với route cho 
        // nó trước rồi dùng route đó trong file server.js
        populate:
        {
          path: "GiangVien",
          select: "People"
          //populate(...)
        }
      })
  // .populate(...) Nếu muốn tiếp tục populate của exams thì viết tiếp ở đây
  res.json(exams)
})

const createExam = asyncHandler(async (req, res) => {
  const exam = await Exam.create(req.body)
  res.json(exam)
})

const getExam = asyncHandler(async (req, res) => {
  const exam = await Exam.findById(req.params.Id)
    .populate(
      {
        path: "CTMH", select: "_id GiangVien",
        populate:
        {
          path: "GiangVien",
          select: "People"
        }
      })
  res.json(exam)
})

const getExamByLecturer = asyncHandler(async (req, res) => {
  const exams = await Exam.find({}).populate(
    { path:"CTMH",
    populate:{
    path:"MonHoc"
  }
  })
  const examsByLecturer = []
  exams.forEach(function (e) {
    if (e.CTMH.GiangVien == req.query.id) {
      examsByLecturer.push(e)
    }
  })
  res.json(examsByLecturer)
})

export {getExams, createExam, getExam, getExamByLecturer}
