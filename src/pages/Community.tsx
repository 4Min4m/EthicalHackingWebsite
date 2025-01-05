import React from 'react';
import { MessageSquare, Users, Award } from 'lucide-react';

export function Community() {
  const discussions = [
    {
      title: "Latest Web Security Vulnerabilities",
      author: "SecurityPro",
      replies: 23,
      views: 156,
      lastActive: "2 hours ago"
    },
    {
      title: "Best Practices for Network Penetration Testing",
      author: "EthicalHacker101",
      replies: 45,
      views: 289,
      lastActive: "5 hours ago"
    },
    {
      title: "Mobile App Security Challenges",
      author: "AppSecExpert",
      replies: 18,
      views: 132,
      lastActive: "1 day ago"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#0b2b26]">Community</h1>
        <button className="bg-[#051f20] text-white px-4 py-2 rounded-md hover:bg-[#0b2b26]">
          New Discussion
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">1,234</p>
              <p className="text-sm text-[#153832]">Active Members</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <MessageSquare className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">5,678</p>
              <p className="text-sm text-[#153832]">Total Discussions</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Award className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">892</p>
              <p className="text-sm text-[#153832]">Certified Members</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#0b2b26]">Recent Discussions</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {discussions.map((discussion, index) => (
            <div key={index} className="p-4 hover:bg-[#daf1df] transition-colors">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-[#0b2b26] hover:text-[#255346]">
                    <a href="#">{discussion.title}</a>
                  </h3>
                  <p className="text-sm text-[#153832]">
                    Started by {discussion.author} • {discussion.lastActive}
                  </p>
                </div>
                <div className="text-sm text-[#153832]">
                  <span className="mr-4">{discussion.replies} replies</span>
                  <span>{discussion.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}