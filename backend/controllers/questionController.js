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

const getQuestionBySubjectRequest = asyncHandler(async (req, res) => {
  const questions = await Question.find({MonHoc: req.query.id})
  res.json(questions)
})

const createQuestion = asyncHandler(async (req, res) => {
  const question = await Question.create(req.body)
  res.json(question)
})

export {getQuestionList, getQuestion, getQuestionBySubjectRequest, createQuestion}
