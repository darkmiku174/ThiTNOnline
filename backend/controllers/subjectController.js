import asyncHandler from "express-async-handler";
import Subject from '../models/subjectSchema.js'
import SubjectDetail from '../models/subjectDetailSchema.js'

const getSubjectList = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({})
  res.json(subjects)
})

const getSubject = asyncHandler(async (req, res) => {
  const subject = await Subject.findById(req.params.Id)
  res.json(subject)
})

const getSubjectDetails = asyncHandler(async (req, res) => {
  const subjectDetails = await SubjectDetail.find({})
  res.json(subjectDetails)
})

// const getSubjectDetail = asyncHandler(async (req, res) => {
//   const subjectDetail = await SubjectDetail.findById(req.params.Id)
//   res.json(subjectDetail)
// })

export {getSubjectList, getSubjectDetails, getSubject}
