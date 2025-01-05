import React from 'react';
import { BookOpen, Star, Clock, Award } from 'lucide-react';

export function Training() {
  const modules = [
    {
      title: "Web Application Security Fundamentals",
      description: "Learn the basics of securing web applications",
      difficulty: "Beginner",
      duration: "4 hours",
      completed: "65%"
    },
    {
      title: "Network Penetration Testing",
      description: "Master the art of network security testing",
      difficulty: "Intermediate",
      duration: "6 hours",
      completed: "0%"
    },
    {
      title: "Advanced Exploitation Techniques",
      description: "Advanced methods for identifying vulnerabilities",
      difficulty: "Advanced",
      duration: "8 hours",
      completed: "0%"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#0b2b26]">Training Modules</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">12</p>
              <p className="text-sm text-[#153832]">Available Modules</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Star className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">4.8</p>
              <p className="text-sm text-[#153832]">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Clock className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">32h</p>
              <p className="text-sm text-[#153832]">Total Duration</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Award className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">3</p>
              <p className="text-sm text-[#153832]">Your Certificates</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#0b2b26] mb-2">{module.title}</h3>
              <p className="text-[#153832] mb-4">{module.description}</p>
              <div className="flex items-center justify-between text-sm text-[#153832] mb-4">
                <span className="flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  {module.difficulty}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {module.duration}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#8bb69b] h-2 rounded-full"
                  style={{ width: module.completed }}
                ></div>
              </div>
              <p className="text-right text-sm text-[#153832] mt-1">{module.completed} Complete</p>
            </div>
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <button className="w-full bg-[#051f20] text-white py-2 px-4 rounded-md hover:bg-[#0b2b26] transition-colors">
                Start Module
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}