import express from 'express'
import {getLecturerList, getLecturer, authLecturer, updateLecturerProfile} from '../controllers/lecturerController.js'
import protect from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.post("/login", authLecturer)
router.get("/", getLecturerList)
// router.get('/:Id', getLecturer)
router.route("/:id").get(getLecturer).put(protect,updateLecturerProfile)
export default router
