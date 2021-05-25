import express from 'express'
import {getLecturerList} from '../controllers/lecturerController.js'

const router = express.Router()

router.get("/", getLecturerList)

export default router
