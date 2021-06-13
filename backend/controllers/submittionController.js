import asyncHandler from 'express-async-handler'
import Submittion from '../models/submittionSchema.js'
import Student from '../models/studentSchema.js'

const getSubmittionList = asyncHandler(async (req, res) => {
  const submittions = await Submittion.find({})
  res.json(submittions)
})

const getSubmittion = asyncHandler(async (req, res) => {
  const submittion = await Submittion.findById(req.params.Id)
  res.json(submittion)
})

const getSubmittionByStudent = asyncHandler(async (req, res) => {
  const student = await Student.findOne({People: req.user._id})
  const submittions = await Submittion.find({SinhVien: student._id})
    .populate({
      path: "De", select: "DSCH CTMH",
      populate:
      {
        path: "CTMH", select: "MonHoc",
        populate: {path: "MonHoc", select: "TenMH"}
      }
    })
  res.json(submittions)
})

const creatSubmittion = asyncHandler(async (req, res) => {
  const existing = await Submittion.findOne({SinhVien: req.body.SinhVien, De: req.body.De})
  if (existing) {
    res.status(400)
    throw new Error('Submittion already exists')
  }
  const submittion = await Submittion.create(req.body)
  res.json(submittion)
})

export {getSubmittionList, getSubmittion, creatSubmittion, getSubmittionByStudent}
