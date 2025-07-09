import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter App</h1>
      <h2>Counter: {state.counter}</h2>
      <button onClick={() => dispatch(increment())}>+ Increment</button>
      <button onClick={() => dispatch(decrement())}>- Decrement</button>

      <h3>Redux State (Stringified):</h3>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
};

export default App;
