import React from 'react';

const ThemeDisplay = ({ theme }) => {
  return (
    <h1>
      Current Theme: <span style={{ textTransform: 'uppercase' }}>{theme}</span>
    </h1>
  );
};

export default ThemeDisplay;
