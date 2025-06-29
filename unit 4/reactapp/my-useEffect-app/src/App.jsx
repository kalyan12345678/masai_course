import React, { useState, useEffect } from "react";

function ThemedBox({ theme, text }) {
  const boxStyle = {
    padding: "1rem",
    margin: "1rem 0",
    borderRadius: "5px",
    backgroundColor: theme === "light" ? "#ffffff" : "#444444",
    color: theme === "light" ? "#000000" : "#ffffff",
    border: "1px solid",
  };

  return <div style={boxStyle}>{text}</div>;
}


export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#eeeeee" : "#222222",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <h2>Theme Toggle App</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>
      <ThemedBox theme={theme} text="Box 1" />
      <ThemedBox theme={theme} text="Box 2" />
      <ThemedBox theme={theme} text="Box 3" />
    </div>
  );
}
