import express  from "express";
import {AskQuestions} from "../controllers/Questions.js"
import {getAllQuestions} from "../controllers/Questions.js"
import {deleteQuestion} from "../controllers/Questions.js"
import {voteQuestion} from "../controllers/Questions.js"
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/Ask',auth,AskQuestions);
router.get('/get',getAllQuestions);
router.delete('/delete/:id',auth,deleteQuestion);
router.patch('/vote/:id',auth,voteQuestion);

export default router;