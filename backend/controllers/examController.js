import asyncHandler from "express-async-handler";
import Exam from '../models/examSchema.js'
import SubjectDetail from '../models/subjectDetailSchema.js'
import Submittion from '../models/submittionSchema.js'

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
      }).populate("DSCH")
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
      }).populate("DSCH")
  res.json(exam)
})

const getExamByLecturer = asyncHandler(async (req, res) => {
  const exams = await Exam.find({}).populate(
    {
      path: "CTMH",
      populate: {
        path: "MonHoc",
      }
    }).populate("DSCH")
  const examsByLecturer = []
  exams.forEach(function (e) {
    if (e.CTMH != null) {
      if (e.CTMH.GiangVien == req.query.id) {
        examsByLecturer.push(e)
      }
    }

  })
  res.json(examsByLecturer)
})

const getExamByStudent = asyncHandler(async (req, res) => {
  const submittions = await Submittion.find({SinhVien: req.query.id})
  const exams = await Exam.find(
    {
      _id: {$nin: submittions.map(s => s.De)},
      NgayThi: new Date().toLocaleDateString(),
    }).populate(
      {
        path: "CTMH",
        match: {DSSV: req.query.id},
        populate: {path: "MonHoc"}
      }).populate({path: "DSCH", select: "-Diem -PhanLoai"})
  console.log(exams)
  res.json(exams)
})

const deleteExam = asyncHandler(async (req, res) => {
  console.log(req.query)
  const exam = await Exam.findByIdAndDelete(req.params.id)
  if (exam) {
    res.status(200).json({message: "Delete success"})
  } else {
    res.status(404).json({message: "Exam not found"})
  }
})

export {getExams, createExam, getExam, getExamByLecturer, getExamByStudent, deleteExam}
