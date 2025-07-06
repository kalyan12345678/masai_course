import React, { useReducer } from 'react';
import './App.css';
import { counterReducer, initialState } from './reducer/counterReducer';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="App">
      <CounterDisplay count={state.count} />
      <CounterButtons dispatch={dispatch} />
    </div>
  );
}

export default App;
