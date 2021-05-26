import asyncHandler from 'express-async-handler'
import Question from '../models/questionSchema.js'

const getQuestionList = asyncHandler(async (req, res) => {
  const questions = await Question.find({})
  res.json(questions)
})

const getQuestion = asyncHandler(async (req, res) => {
  const question = await Question.findById(req.params.Id)
  res.json(question)
})
export {getQuestionList, getQuestion}