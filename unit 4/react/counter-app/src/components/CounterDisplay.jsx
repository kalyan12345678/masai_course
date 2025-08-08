import React from 'react';


const CounterDisplay = ({ count, animate }) => {
  return (
    <h1 className={animate ? 'counter-animate' : ''}>Current Count: {count}</h1>
  );
};

export default CounterDisplay;
