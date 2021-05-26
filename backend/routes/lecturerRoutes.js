import express from 'express'
import {getLecturerList, getLecturer} from '../controllers/lecturerController.js'

const router = express.Router()

router.get("/", getLecturerList)

router.get('/:Id', getLecturer)
export default router
