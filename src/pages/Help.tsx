import React from 'react';
import { HelpCircle, Upload, BookOpen, FileQuestion, BarChart2 } from 'lucide-react';

const Help: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Help & Tutorials</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-semibold mb-4">Getting Started with ExamCracker</h2>
        <p className="mb-6">Welcome to ExamCracker! Here's a quick guide to help you make the most of our app:</p>

        <HelpSection
          icon={<Upload className="w-6 h-6" />}
          title="Uploading Study Materials"
          content="To upload your notes, PDFs, or Word documents, go to the Upload page. You can drag and drop files or click to select them. We support various file formats to make it easy for you to add your study materials."
        />

        <HelpSection
          icon={<BookOpen className="w-6 h-6" />}
          title="Creating and Using Flashcards"
          content="After uploading your materials, our system will automatically generate flashcards based on key concepts. You can also create your own flashcards. Use the Flashcards page to review and study these cards."
        />

        <HelpSection
          icon={<FileQuestion className="w-6 h-6" />}
          title="Taking Quizzes"
          content="Our Quiz feature generates questions based on your uploaded materials and previous year question papers. Go to the Quiz page to test your knowledge and prepare for your exams."
        />

        <HelpSection
          icon={<BarChart2 className="w-6 h-6" />}
          title="Tracking Your Progress"
          content="Visit the Progress page to see how you're doing. You'll find charts and statistics showing your performance across different subjects and topics."
        />

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
          <p>If you have any questions or need further assistance, please don't hesitate to contact our support team at support@examcracker.com.</p>
        </div>
      </div>
    </div>
  );
};

const HelpSection: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="text-xl font-semibold ml-2">{title}</h3>
      </div>
      <p className="ml-8">{content}</p>
    </div>
  );
};

export default Help;