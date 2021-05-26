import asyncHandler from 'express-async-handler'
import Student from '../models/studentSchema.js'

const getStudentList = asyncHandler(async (req, res) => {
  const students = await Student.find({})
  res.json(students)
})

const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.Id)
  res.json(student)
})
export {getStudentList, getStudent}