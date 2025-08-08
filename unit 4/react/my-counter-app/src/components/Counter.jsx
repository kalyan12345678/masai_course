import { useReducer } from "react";

// Step 1: Initial state at the top
const initialState = { count: 0 };

// Step 2: Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Step 3: Counter component
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = () => dispatch({ type: "increment" });
  const decrement = () => dispatch({ type: "decrement" });

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
