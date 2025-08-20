import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginLeft: 8 }}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
