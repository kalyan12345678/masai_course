import React from 'react';
import useTimer from '../hooks/useTimer';

const TimerComponent = () => {
  const { seconds, start, stop, reset } = useTimer(0);

  return (
    <div style={{ textAlign: 'center', margin: '32px' }}>
      <h2>Timer: {seconds} seconds</h2>
      <button onClick={start}>Start</button>
      <button onClick={stop} style={{ marginLeft: 8 }}>Stop</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

export default TimerComponent;
