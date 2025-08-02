import React from 'react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <h1>🍽️ Recipe Finder</h1>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
      </button>
    </header>
  );
}

export default Header;
