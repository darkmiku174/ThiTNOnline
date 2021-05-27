import asyncHandler from 'express-async-handler'
import Submittion from '../models/submittionSchema.js'

const getSubmittionList = asyncHandler(async (req, res) => {
  const submittions = await Submittion.find({})
  res.json(submittions)
})

const getSubmittion = asyncHandler(async (req, res) => {
  const submittion = await Submittion.findById(req.params.Id)
  res.json(submittion)
})
export {getSubmittionList, getSubmittion}