// src/components/Counter.jsx
import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      // return a brand-new state object with updated count
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    default:
      // if action type is unknown, return the current state unchanged
      return state;
  }
}

function Counter() {
  // Hook: reducer + initial state -> [state, dispatch]
  const [state, dispatch] = useReducer(reducer, initialState);

  // helper functions that dispatch actions (keeps JSX clean)
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });

  return (
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <h2>Counter</h2>
      <p style={{ fontSize: 24 }}>{state.count}</p>

      <button onClick={increment} style={{ marginRight: 8 }}>
        Increment
      </button>

      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
