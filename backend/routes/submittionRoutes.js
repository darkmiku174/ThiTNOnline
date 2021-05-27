import express from 'express'
import {getSubmittionList, getSubmittion} from '../controllers/submittionController.js'

const router = express.Router()

router.get('/', getSubmittionList)
// router.post("/", createSubmittion)

router.get('/:Id', getSubmittion)

export default router