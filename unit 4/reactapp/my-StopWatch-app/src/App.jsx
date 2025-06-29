import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  const [target, setTarget] = useState(0);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (target) {
      if (target > 0 && count % target === 0) {
        console.log("Target has reached");
      }
    } else {
      if (count >= 10 && count % 10 === 0) {
        console.log("Timer cross 10 sec");
      }
    }
  }, [count]);

  function start() {
    setRunning(true);

    if (count >= 10) {
      setCount(0);
    }
  }

  function stop() {
    setRunning(false);
  }

  function reset() {
    setCount(0);
    setRunning(false);
    setRunning(false);
  }

  return (
    <>
      <h1>⏱️ Simple Stopwatch</h1>
      <h3>Timer in seconds {count}</h3>
      <div>
        <input
          type="number"
          id="target"
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter The time you want to stop"
        />
        <br />
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
