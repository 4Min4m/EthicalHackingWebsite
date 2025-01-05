import React from 'react';
import { Trophy, Target, Award, Zap } from 'lucide-react';

export function Leaderboard() {
  const leaders = [
    {
      rank: 1,
      username: "EliteHacker",
      points: 15420,
      badges: 12,
      contributions: 156
    },
    {
      rank: 2,
      username: "SecurityPro",
      points: 14250,
      badges: 10,
      contributions: 142
    },
    {
      rank: 3,
      username: "CyberNinja",
      points: 13800,
      badges: 9,
      contributions: 128
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-[#0b2b26]">Leaderboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Trophy className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">Top 100</p>
              <p className="text-sm text-[#153832]">Your Ranking</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Target className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">8,450</p>
              <p className="text-sm text-[#153832]">Your Points</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Award className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">6</p>
              <p className="text-sm text-[#153832]">Your Badges</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3">
            <Zap className="w-8 h-8 text-[#255346]" />
            <div>
              <p className="text-2xl font-bold text-[#0b2b26]">42</p>
              <p className="text-sm text-[#153832]">Contributions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-[#0b2b26]">Top Performers</h2>
        </div>
        <div className="divide-y divide-gray-200">
          {leaders.map((leader) => (
            <div key={leader.rank} className="p-4 hover:bg-[#daf1df] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {leader.rank === 1 ? (
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    ) : leader.rank === 2 ? (
                      <Trophy className="w-6 h-6 text-gray-400" />
                    ) : (
                      <Trophy className="w-6 h-6 text-orange-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0b2b26]">{leader.username}</h3>
                    <p className="text-sm text-[#153832]">
                      {leader.badges} badges • {leader.contributions} contributions
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-[#0b2b26]">{leader.points.toLocaleString()}</p>
                  <p className="text-sm text-[#153832]">points</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}