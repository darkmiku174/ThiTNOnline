import express from 'express'
import {getQuestionList, getQuestion} from '../controllers/questionController.js'

const router = express.Router()

router.get('/', getQuestionList)
// router.post("/", createQuestion)

router.get('/:Id', getQuestion)

export default router