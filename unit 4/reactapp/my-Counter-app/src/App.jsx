import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <h1>Simple Counter</h1>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(increment())} > Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={counter===0}> Decrement</button>
    </div>
  );
}

export default App;
