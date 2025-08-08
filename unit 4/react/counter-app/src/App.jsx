
import React, { useReducer, useState, useRef, useEffect } from 'react';
import './App.css';
import { counterReducer, initialState } from './reducer/counterReducer';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';
import ThemeToggle from './components/ThemeToggle';
import HistoryList from './components/HistoryList';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  const [inputValue, setInputValue] = useState('');
  const [theme, setTheme] = useState('light');
  const [history, setHistory] = useState([initialState.count]);
  const prevCount = useRef(state.count);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (prevCount.current !== state.count) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 350);
      setHistory((h) => [...h, state.count]);
      prevCount.current = state.count;
    }
  }, [state.count]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const handleSet = () => {
    const val = parseInt(inputValue, 10);
    if (!isNaN(val)) {
      dispatch({ type: 'SET', payload: val });
      setInputValue('');
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  const toggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <CounterDisplay count={state.count} animate={animate} />
      <CounterButtons dispatch={dispatch} />
      <div className="set-controls">
        <input
          type="number"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder="Set counter value"
        />
        <button onClick={handleSet}>Set</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <HistoryList history={history} />
    </div>
  );
}

export default App;
