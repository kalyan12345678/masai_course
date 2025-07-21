import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth/AuthProvider';

export default function Navbar({ darkMode, toggleDarkMode }) {
  const { user, logout } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h1>🧘 HealthyHabits</h1>
      </div>
      <div className="navbar-controls">
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <nav className="navbar-links">
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button className="logout-btn" onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
