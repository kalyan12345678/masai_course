// src/App.jsx
import { useState } from "react";
import Main from "./components/Main";

function App() {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Props Drilling Example</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px" }}
      />
      <Main name={name} />
    </div>
  );
}

export default App;
