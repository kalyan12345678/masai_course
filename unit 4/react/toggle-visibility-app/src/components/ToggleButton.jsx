import React from 'react';

const ToggleButton = ({ dispatch }) => {
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_VISIBILITY' })}>
      Toggle Message
    </button>
  );
};

export default ToggleButton;
