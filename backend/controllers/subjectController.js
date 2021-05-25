import asyncHandler from "express-async-handler";
import Subject from '../models/subjectSchema.js'
import SubjectDetail from '../models/subjectDetailSchema.js'

const getSubjectList = asyncHandler(async (req, res) => {
  const subjects = await Subject.find({})
  res.json(subjects)
})
const getSubjectDetails = asyncHandler(async (req, res) => {
  const subjectDetails = await SubjectDetail.find({})
  res.json(subjectDetails)
})

export {getSubjectList, getSubjectDetails}
