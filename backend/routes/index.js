import express from "express";
import { getAllSubjects } from "../controllers/SubjectController.js";
import { getCategoryQuestions } from "../controllers/QuestionController.js"; 
import { getQuizResult } from "../controllers/QuizController.js";
const router = express.Router();
 
router.get('/getAllSubjects', getAllSubjects);

router.post('/getCategoryQuestions',getCategoryQuestions);

router.post('/submitQuizResult',getQuizResult);

export default router;