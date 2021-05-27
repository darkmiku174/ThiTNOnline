import express from 'express'
import {
  getSubjectList,
  getSubjectDetails,
  getSubject
} from '../controllers/subjectController.js'

const router = express.Router()

router.get("/details", getSubjectDetails)
router.get("/", getSubjectList)
router.get("/:Id", getSubject)

// router.get('/:Id', getSubjectDetail)

export default router

