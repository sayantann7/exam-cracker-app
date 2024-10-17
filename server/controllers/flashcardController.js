import Flashcard from '../models/Flashcard.js';

export const createFlashcard = async (req, res) => {
  try {
    const { question, answer, documentId } = req.body;
    const newFlashcard = new Flashcard({
      user: req.user._id,
      question,
      answer,
      document: documentId,
    });

    const savedFlashcard = await newFlashcard.save();
    res.status(201).json(savedFlashcard);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find({ user: req.user._id });
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const updateFlashcard = async (req, res) => {
  try {
    const { question, answer } = req.body;
    const flashcard = await Flashcard.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      { question, answer },
      { new: true }
    );

    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }

    res.json(flashcard);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteFlashcard = async (req, res) => {
  try {
    const flashcard = await Flashcard.findOneAndDelete({ _id: req.params.id, user: req.user._id });

    if (!flashcard) {
      return res.status(404).json({ message: 'Flashcard not found' });
    }

    res.json({ message: 'Flashcard deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};