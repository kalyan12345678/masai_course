import React from 'react';


const CounterButtons = ({ dispatch }) => {
  return (
    <div className="buttons">
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default CounterButtons;
