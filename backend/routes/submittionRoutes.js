import express from 'express'
import {getSubmittionList, getSubmittion, creatSubmittion, getSubmittionByStudent} from '../controllers/submittionController.js'
import protect from '../middlewares/authMiddlewares.js'

const router = express.Router()

router.get('/', getSubmittionList)
router.post("/", creatSubmittion)
// router.get("/student", getSubmittionByStudent)
router.route("/student").get(protect,getSubmittionByStudent)
// router.post("/", createSubmittion)

router.get('/:Id', getSubmittion)

export default router
