import express from 'express'
import {getStudentList, getStudent, authStudent} from '../controllers/studentController.js'

const router = express.Router()

router.route("/login").post(authStudent)
router.get("/", getStudentList)
export default router
