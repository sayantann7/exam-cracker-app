import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock data for flashcards
const mockFlashcards = [
  { id: 1, question: "What is the capital of France?", answer: "Paris" },
  { id: 2, question: "What is the largest planet in our solar system?", answer: "Jupiter" },
  { id: 3, question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" },
];

const Flashcards: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % mockFlashcards.length);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + mockFlashcards.length) % mockFlashcards.length);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Flashcards</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <div className="mb-4 text-sm text-gray-500 text-right">
            Card {currentCard + 1} of {mockFlashcards.length}
          </div>
          <div
            className="h-64 flex items-center justify-center cursor-pointer"
            onClick={toggleAnswer}
          >
            <p className="text-2xl text-center">
              {showAnswer
                ? mockFlashcards[currentCard].answer
                : mockFlashcards[currentCard].question}
            </p>
          </div>
          <div className="mt-4 text-center">
            <button
              className="text-blue-600 hover:text-blue-800"
              onClick={toggleAnswer}
            >
              {showAnswer ? "Show Question" : "Show Answer"}
            </button>
          </div>
        </div>
        <div className="flex justify-between bg-gray-100 px-4 py-3">
          <button
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={prevCard}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>
          <button
            className="flex items-center text-gray-600 hover:text-gray-900"
            onClick={nextCard}
          >
            Next
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Flashcards;