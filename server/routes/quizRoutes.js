import express from 'express';
import { createQuiz, getQuizzes, getQuiz, submitQuiz } from '../controllers/quizController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createQuiz);
router.get('/', protect, getQuizzes);
router.get('/:id', protect, getQuiz);
router.post('/:id/submit', protect, submitQuiz);

export default router;