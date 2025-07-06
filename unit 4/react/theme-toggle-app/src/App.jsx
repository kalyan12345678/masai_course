import React, { useReducer } from 'react';
import './App.css';
import ThemeDisplay from './components/ThemeDisplay';
import ThemeButton from './components/ThemeButton';
import { themeReducer, initialState } from './reducer/themeReducer';

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const { theme } = state;

  return (
    <div className={`App ${theme}`}>
      <ThemeDisplay theme={theme} />
      <ThemeButton dispatch={dispatch} />
    </div>
  );
}

export default App;
