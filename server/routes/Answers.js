import express from 'express'

import {postAnswer} from '../controllers/Answers.js'
import {deleteAnswer} from '../controllers/Answers.js'
import auth from '../middlewares/auth.js'
 
const router = express.Router()

router.patch('/post/:id',auth,postAnswer)
router.patch('/delete/:id',auth,deleteAnswer)

export default router;