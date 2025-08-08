import { useRef, useState } from "react";

function FocusInput() {
  const inputRef = useRef(null); // Step 1: create reference
  const [focused, setFocused] = useState(false); // Step 2: track if focused

  const handleFocus = () => {
    inputRef.current.focus(); // Move cursor to the input
    inputRef.current.style.backgroundColor = "lightyellow"; // Change background color
    setFocused(true); // Show message
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <input
        ref={inputRef} // Step 3: link ref to input
        type="text"
        placeholder="Click the button to focus me"
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <br />
      <button
        onClick={handleFocus}
        style={{
          marginTop: "10px",
          padding: "8px 12px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Focus Input
      </button>
      {focused && (
        <p style={{ color: "green", marginTop: "10px" }}>Focused!</p>
      )}
    </div>
  );
}

export default FocusInput;
