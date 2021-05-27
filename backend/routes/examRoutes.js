import express from 'express'
import {getExams, createExam, getExam, getExamByLecturer} from '../controllers/examController.js'

const router = express.Router()

// Chỉ dùng file này để định nghĩa route, 
// tẩt cả các controller phải nằm trong file controlLErs
// Tránh việc phải chạy qua lại giữa các file
router.get("/lecturer", getExamByLecturer)
router.get('/', getExams)
router.post("/", createExam)
router.get('/:Id', getExam)

export default router
