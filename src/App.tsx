import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './components/AuthContext';
import { Dashboard } from './pages/Dashboard';
import { Community } from './pages/Community';
import { Training } from './pages/Training';
import { Incidents } from './pages/Incidents';
import { Leaderboard } from './pages/Leaderboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Layout />}>
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