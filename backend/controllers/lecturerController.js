import asyncHandler from 'express-async-handler'
import Lecturer from '../models/lecturerSchema.js'

const getLecturerList = asyncHandler(async (req, res) => {
  const lecturers = await Lecturer.find({})
  res.json(lecturers)
})

export {getLecturerList}
