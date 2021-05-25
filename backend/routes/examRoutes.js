import express from 'express'
import {getExams, createExam} from '../controllers/examControllers.js'

const router = express.Router()

// Chỉ dùng file này để định nghĩa route, 
// tẩt cả các controller phải nằm trong file controlLErs
// Tránh việc phải chạy qua lại giữa các file
router.get('/', getExams)
router.post("/", createExam)

//router.get("/:id",...)

export default router
