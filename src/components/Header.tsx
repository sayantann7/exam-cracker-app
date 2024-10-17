import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen size={32} />
          <span className="text-2xl font-bold">ExamCracker</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/upload" className="hover:text-blue-200">Upload</Link></li>
            <li><Link to="/flashcards" className="hover:text-blue-200">Flashcards</Link></li>
            <li><Link to="/quiz" className="hover:text-blue-200">Quiz</Link></li>
            <li><Link to="/progress" className="hover:text-blue-200">Progress</Link></li>
            <li><Link to="/help" className="hover:text-blue-200">Help</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;