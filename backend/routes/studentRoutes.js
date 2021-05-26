import express from 'express'
import {getStudentList, getStudent} from '../controllers/studentController.js'

const router = express.Router()

router.get("/", getStudentList)

router.get('/:Id', getStudent)
export default router
