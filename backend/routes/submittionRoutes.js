import express from 'express'
import {getSubmittionList, getSubmittion, creatSubmittion, getSubmittionByStudent} from '../controllers/submittionController.js'

const router = express.Router()

router.get('/', getSubmittionList)
router.post("/", creatSubmittion)
router.get("/student", getSubmittionByStudent)
// router.post("/", createSubmittion)

router.get('/:Id', getSubmittion)

export default router
