import express from 'express'
import {getQuestionList, getQuestion, getQuestionBySubjectRequest, createQuestion, deleteQuestion} from '../controllers/questionController.js'

const router = express.Router()

router.get('/', getQuestionList)
router.post("/", createQuestion)
router.get("/subject", getQuestionBySubjectRequest)
// router.post("/", createQuestion)

// router.get('/:Id', getQuestion)
router.route("/:id").get(getQuestion).delete(deleteQuestion)

export default router
