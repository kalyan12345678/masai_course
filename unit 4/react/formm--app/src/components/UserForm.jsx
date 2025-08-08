import { useReducer, useState } from "react";

// 1. initialState
const initialState = { email: "", password: "" };

// 2. reducer
function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("invalid action type");
  }
}

function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
    setIsSubmitted(false);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input
            type="email"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
            required
          />
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password: </label>
          <input
            type="password"
            value={state.password}
            onChange={(e) =>
              dispatch({ type: "password", payload: e.target.value })
            }
            required
          />
        </div>

        {/* Buttons */}
        <button type="submit" style={{ marginRight: "10px" }}>
          Submit
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>

      {/* Conditional Output */}
      {isSubmitted && (
        <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "10px" }}>
          <h3>Submitted Data</h3>
          <p>Email: {state.email}</p>
          <p>Password: {state.password}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
