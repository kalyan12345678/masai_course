import React from 'react';

const ThemeButton = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Toggle Theme
    </button>
  );
};

export default ThemeButton;
