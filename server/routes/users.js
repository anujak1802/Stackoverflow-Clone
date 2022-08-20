import express from "express";
import { signup, login } from '../controllers/auth.js'
const router = express.Router();

router.post('/signup', () => { })
router.post('/login', () => { })

export default router;