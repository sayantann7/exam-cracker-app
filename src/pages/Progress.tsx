import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for progress chart
const mockProgressData = [
  { subject: 'Math', score: 85 },
  { subject: 'Physics', score: 72 },
  { subject: 'Chemistry', score: 90 },
  { subject: 'Computer Science', score: 95 },
  { subject: 'Electronics', score: 78 },
];

const Progress: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Progress</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-4">Subject Performance</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={mockProgressData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Completed Physics Quiz</span>
              <span className="text-green-600">Score: 85%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Created 20 Flashcards for Chemistry</span>
              <span className="text-blue-600">Progress: 100%</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Uploaded Math Notes</span>
              <span className="text-gray-600">2 days ago</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Progress;