import asyncHandler from "express-async-handler";
import SubjectDetail from '../models/subjectDetailSchema.js'
import Subject from '../models/subjectSchema.js'

const getSubjectList = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({})
  res.json(subjects)
})

const getSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.Id)
  res.json(subject)
})

const getSubjectDetails = asyncHandler(async (req, res) => {
  const subjectDetails = await SubjectDetail.find(
    {
      GiangVien: req.query.giangvien
    })
    .populate("MonHoc")
  const subjectDetailsActive = []
  subjectDetails.forEach(function (s) {
    if (new Date(s.KhoaHoc).getFullYear() !== new Date().getFullYear()) {
      return;
    }
    if (new Date(s.KhoaHoc).getMonth() > 5 - new Date().getMonth()) {
      return;
    }
    subjectDetailsActive.push(s)
  })
  res.json(subjectDetailsActive)
})

// const getSubjectDetail = asyncHandler(async (req, res) => {
//   const subjectDetail = await SubjectDetail.findById(req.params.Id)
//   res.json(subjectDetail)
// })

export {getSubjectList, getSubjectDetails, getSubject}
