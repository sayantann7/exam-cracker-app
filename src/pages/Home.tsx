import React from 'react';
import { Link } from 'react-router-dom';
import { Upload, BookOpen, FileQuestion, BarChart2 } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to ExamCracker</h1>
      <p className="text-xl mb-8">Your ultimate exam preparation companion for B.Tech students</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<Upload size={48} />}
          title="Upload Notes"
          description="Upload your handwritten notes, PDFs, and Word documents"
          link="/upload"
        />
        <FeatureCard
          icon={<BookOpen size={48} />}
          title="Flashcards"
          description="Create and study flashcards for efficient memorization"
          link="/flashcards"
        />
        <FeatureCard
          icon={<FileQuestion size={48} />}
          title="Take Quizzes"
          description="Test your knowledge with tailored quizzes"
          link="/quiz"
        />
        <FeatureCard
          icon={<BarChart2 size={48} />}
          title="Track Progress"
          description="Monitor your performance and improvement"
          link="/progress"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default Home;