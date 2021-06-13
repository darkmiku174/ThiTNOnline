import asyncHandler from 'express-async-handler'
import Student from '../models/studentSchema.js'
import People from '../models/peopleSchema.js'
import generateToken from '../ultils/generateToken.js'

const getStudentList = asyncHandler(async (req, res) => {
  const students = await Student.find()
  res.json(students)
})

const getStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.Id)
  res.json(student)
})

const authStudent = asyncHandler(async (req, res) => {
  const people = await People.findOne({CMND: req.query.cmnd})
  if (!people) {
    res.status(404)
    res.json({message: "User not found"})
  }
  const student = await Student.findOne({
    People: people._id
  })
  if (student && (student.matchPassword(req.query.password))) {
    delete student._doc.Password
    res.json({...people._doc, ...student._doc, token: generateToken(people._id)})
  } else {
    res.status(401)
    throw new Error("Invalid email or password")
  }
})

export {getStudentList, getStudent, authStudent}
