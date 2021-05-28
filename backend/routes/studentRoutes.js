import express from 'express'
import {getStudentList, getStudent, authStudent} from '../controllers/studentController.js'

const router = express.Router()

router.post("/login", authStudent)
router.get("/", getStudentList)
export default router
