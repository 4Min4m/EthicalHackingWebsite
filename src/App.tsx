import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider, useAuth } from './components/AuthContext';
import { Dashboard } from './pages/Dashboard';
import { Community } from './pages/Community';
import { Training } from './pages/Training';
import { Incidents } from './pages/Incidents';
import { Leaderboard } from './pages/Leaderboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-[#daf1df] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-[#0b2b26]">Loading...</p>
        </div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/login" />;
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-[#daf1df] flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-[#0b2b26]">Loading...</p>
        </div>
      </div>
    );
  }
  
  return !user ? <>{children}</> : <Navigate to="/" />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="community" element={<Community />} />
            <Route path="training" element={<Training />} />
            <Route path="incidents" element={<Incidents />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;