import express from 'express'
import {getSubjectList, getSubjectDetails} from '../controllers/subjectController.js'

const router = express.Router()

router.get("/", getSubjectList)
router.get("/details", getSubjectDetails)

export default router

