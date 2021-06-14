import express from 'express'
import {getExams, createExam, getExam, getExamByLecturer, getExamByStudent,deleteExam} from '../controllers/examController.js'
import protect from '../middlewares/authMiddlewares.js'

const router = express.Router()

// Chỉ dùng file này để định nghĩa route, 
// tẩt cả các controller phải nằm trong file controlLErs
// Tránh việc phải chạy qua lại giữa các file
router.get("/lecturer", getExamByLecturer)
router.route("/student").get(protect, getExamByStudent)
router.get('/', getExams)
router.post("/", createExam)
// router.get('/:Id', getExam)
router.route("/:id").get(getExam).delete(deleteExam)

export default router
