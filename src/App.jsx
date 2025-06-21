// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import StudentProfile from './pages/StudentProfile';
import ReviewTeamDashboard from './pages/ReviewTeam';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ReviewTeamDashboard />} />
        <Route path="/profile/:id" element={<StudentProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
