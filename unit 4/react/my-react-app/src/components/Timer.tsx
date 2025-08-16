import React, { useState, useRef } from 'react';
import formatTime from '../utils/formatTime';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    setSeconds(0);
    stop();
  };

  React.useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', margin: '32px' }}>
      <h2>Timer: {formatTime(seconds)}</h2>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning} style={{ marginLeft: 8 }}>Stop</button>
      <button onClick={reset} style={{ marginLeft: 8 }}>Reset</button>
    </div>
  );
};

export default Timer;
