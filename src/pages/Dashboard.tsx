import React from 'react';
import { Activity, BookOpen, Flag, Users } from 'lucide-react';

export function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#0b2b26]">
        {/* Added text color */}
        Welcome back, Hacker!
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#153832]">
                {/* Changed from text-gray-600 */}
                Reputation Score
              </p>
              <p className="text-2xl font-bold text-[#0b2b26]">850</p>
            </div>
            <Activity className="w-8 h-8 text-[#255346]" />
            {/* Changed from text-indigo-600 */}
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#153832]">Completed Modules</p>
              <p className="text-2xl font-bold text-[#0b2b26]">12</p>
            </div>
            <BookOpen className="w-8 h-8 text-[#255346]" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#153832]">Reported Incidents</p>
              <p className="text-2xl font-bold text-[#0b2b26]">5</p>
            </div>
            <Flag className="w-8 h-8 text-[#255346]" />
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-[#153832]">Community Rank</p>
              <p className="text-2xl font-bold text-[#0b2b26]">#42</p>
            </div>
            <Users className="w-8 h-8 text-[#255346]" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#0b2b26]">
            {/* Added text color */}
            Recent Activity
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start space-x-3 p-3 hover:bg-[#daf1df] rounded-md">
                {/* Changed from hover:bg-gray-50 */}
                <div className="flex-shrink-0">
                  <Activity className="w-5 h-5 text-[#8bb69b]" />
                  {/* Changed from text-gray-400 */}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#0b2b26]">Completed Advanced XSS Module</p>
                  <p className="text-xs text-[#153832]">2 hours ago</p>
                  {/* Changed from text-gray-500 */}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-[#0b2b26]">Recommended Training</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 hover:bg-[#daf1df] rounded-md">
                {/* Changed from hover:bg-gray-50 */}
                <h3 className="font-medium text-[#0b2b26]">Web Application Security Fundamentals</h3>
                <p className="text-sm text-[#153832]">
                  {/* Changed from text-gray-600 */}
                  Learn the basics of securing web applications
                </p>
                <div className="mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#8bb69b] text-[#051f20]">
                    {/* Changed from bg-green-100 text-green-800 */}
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