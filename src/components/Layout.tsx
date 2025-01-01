import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Shield, Users, BookOpen, Flag, Trophy, LogOut } from 'lucide-react';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8" />
              <span className="font-bold text-xl">EthicalHack</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/community" className="flex items-center space-x-1 hover:text-gray-200">
                <Users className="w-5 h-5" />
                <span>Community</span>
              </Link>
              <Link to="/training" className="flex items-center space-x-1 hover:text-gray-200">
                <BookOpen className="w-5 h-5" />
                <span>Training</span>
              </Link>
              <Link to="/incidents" className="flex items-center space-x-1 hover:text-gray-200">
                <Flag className="w-5 h-5" />
                <span>Incidents</span>
              </Link>
              <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-gray-200">
                <Trophy className="w-5 h-5" />
                <span>Leaderboard</span>
              </Link>
            </div>
            <button className="flex items-center space-x-1 hover:text-gray-200">
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}