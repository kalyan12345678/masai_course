import React, { useReducer } from 'react';
import './App.css';
import ToggleButton from './components/ToggleButton';
import Message from './components/Message';
import { visibilityReducer, initialState } from './reducer/visibilityReducer';

function App() {
  const [state, dispatch] = useReducer(visibilityReducer, initialState);

  return (
    <div className="App">
      <h1>Toggle Visibility with useReducer</h1>
      <ToggleButton dispatch={dispatch} />
      {state.isVisible && <Message />}
    </div>
  );
}

export default App;
