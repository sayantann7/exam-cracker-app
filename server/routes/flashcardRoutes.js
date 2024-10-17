import express from 'express';
import { createFlashcard, getFlashcards, updateFlashcard, deleteFlashcard } from '../controllers/flashcardController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createFlashcard);
router.get('/', protect, getFlashcards);
router.put('/:id', protect, updateFlashcard);
router.delete('/:id', protect, deleteFlashcard);

export default router;