import { useState, useRef, useCallback, useEffect } from 'react';
export default function useTimer(initial = 0) {
  const [seconds, setSeconds] = useState(initial);
  const intervalRef = useRef(null);
  const isRunning = useRef(false);
  const start = useCallback(() => {
    if (!isRunning.current) {
      isRunning.current = true;
      intervalRef.current = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
    }
  }, []);
  const stop = useCallback(() => {
    if (isRunning.current) {
      clearInterval(intervalRef.current);
      isRunning.current = false;
    }
  }, []);
  const reset = useCallback(() => {
    setSeconds(initial);
    stop();
  }, [initial, stop]);
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);
  return { seconds, start, stop, reset };
}
