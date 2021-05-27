import asyncHandler from 'express-async-handler'
import Student from '../models/studentSchema.js'
import People from '../models/People.js'

const getStudentList = asyncHandler(async (req, res) => {
  const students = await Student.find({})
  res.json(students)
})

const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.Id)
  res.json(student)
})

const authStudent = asyncHandler(async (req, res) => {
  const student = await People.find({CMND: req.query.cmnd})
  const student = await Student.findOne({
    People: people._id,
    Password: req.query.password
  })
  res.json({...people._doc, ...student._doc})
})
export {getStudentList, getStudent}
