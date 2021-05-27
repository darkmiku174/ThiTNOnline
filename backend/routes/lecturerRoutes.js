import express from 'express'
import {getLecturerList, getLecturer, authLecturer} from '../controllers/lecturerController.js'

const router = express.Router()

router.post("/login", authLecturer)
router.get("/", getLecturerList)
router.get('/:Id', getLecturer)
export default router
