import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true },
  document: { type: mongoose.Schema.Types.ObjectId, ref: 'Document' },
  createdAt: { type: Date, default: Date.now },
});

const Flashcard = mongoose.model('Flashcard', flashcardSchema);

export default Flashcard;