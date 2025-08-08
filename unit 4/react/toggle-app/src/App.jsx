import { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_VISIBILITY":
      return { ...state, isVisible: !state.isVisible };
    default:
      return state;
  }
}

// Initial state
const initialState = { isVisible: false };

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={() => dispatch({ type: "TOGGLE_VISIBILITY" })}>
        Toggle Message
      </button>

      {state.isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default App;
