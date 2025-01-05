import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Shield, Users, BookOpen, Flag, Trophy } from 'lucide-react';
import { useAuth } from './AuthContext';
import { signOut } from '../lib/auth';

export function Layout() {
  const navigate = useNavigate();
  const { user } = useAuth();

  async function handleLogout() {
    const { error } = await signOut();
    if (!error) {
      navigate('/');
    }
  }

  return (
    <div className="min-h-screen bg-[#daf1df]">
      <nav className="bg-[#051f20] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8" />
              <span className="font-bold text-xl">EthicalHack</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/community" className="flex items-center space-x-1 hover:text-[#8bb69b]">
                <Users className="w-5 h-5" />
                <span>Community</span>
              </Link>
              <Link to="/training" className="flex items-center space-x-1 hover:text-[#8bb69b]">
                <BookOpen className="w-5 h-5" />
                <span>Training</span>
              </Link>
              <Link to="/incidents" className="flex items-center space-x-1 hover:text-[#8bb69b]">
                <Flag className="w-5 h-5" />
                <span>Incidents</span>
              </Link>
              <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-[#8bb69b]">
                <Trophy className="w-5 h-5" />
                <span>Leaderboard</span>
              </Link>
            </div>
            <div>
              {user ? (
                <button 
                  onClick={handleLogout}
                  className="bg-[#255346] text-white px-4 py-2 rounded hover:bg-[#153832] transition-colors"
                >
                  Logout
                </button>
              ) : (
                <div className="space-x-2">
                  <Link 
                    to="/login"
                    className="bg-[#255346] text-white px-4 py-2 rounded hover:bg-[#153832] transition-colors"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/signup"
                    className="bg-transparent border border-[#255346] text-white px-4 py-2 rounded hover:bg-[#255346] transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}