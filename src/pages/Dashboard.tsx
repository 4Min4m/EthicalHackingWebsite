import React from 'react';
import { Activity, BookOpen, Flag, Users } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, Hacker!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reputation Score</p>
              <p className="text-2xl font-bold">850</p>
            </div>
            <Activity className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed Modules</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <BookOpen className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Reported Incidents</p>
              <p className="text-2xl font-bold">5</p>
            </div>
            <Flag className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Community Rank</p>
              <p className="text-2xl font-bold">#42</p>
            </div>
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-md">
                <div className="flex-shrink-0">
                  <Activity className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">Completed Advanced XSS Module</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recommended Training</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 hover:bg-gray-50 rounded-md">
                <h3 className="font-medium">Web Application Security Fundamentals</h3>
                <p className="text-sm text-gray-600">Learn the basics of securing web applications</p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Beginner
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}