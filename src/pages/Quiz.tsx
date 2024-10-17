import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

// Mock data for quiz questions
const mockQuizQuestions = [
  {
    id: 1,
    question: "What is the main function of an operating system?",
    options: [
      "To provide a user interface",
      "To manage hardware resources",
      "To run applications",
      "All of the above"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "Which of the following is not a type of computer network?",
    options: [
      "LAN (Local Area Network)",
      "WAN (Wide Area Network)",
      "MAN (Metropolitan Area Network)",
      "SAN (Storage Area Network)"
    ],
    correctAnswer: 3
  },
  {
    id: 3,
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
      "Central Peripheral Unit"
    ],
    correctAnswer: 0
  }
];

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === mockQuizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < mockQuizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-8">Quiz Results</h1>
        <p className="text-2xl mb-4">Your score: {score} / {mockQuizQuestions.length}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetQuiz}
        >
          Retake Quiz
        </button>
      </div>
    );
  }

  const question = mockQuizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Quiz</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {mockQuizQuestions.length}</p>
          <h2 className="text-xl font-semibold mt-2 mb-4">{question.question}</h2>
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg cursor-pointer ${
                  selectedAnswer === index
                    ? 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
                onClick={() => handleAnswerSelect(index)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleNextQuestion}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === mockQuizQuestions.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;