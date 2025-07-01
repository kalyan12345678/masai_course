import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Child from "./components/child";

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  const styles = {
    padding: "20px",
    minHeight: "100vh",
    backgroundColor: theme === "light" ? "#ffffff" : "#222222",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "0.3s"
  };

  return (
    <div style={styles}>
      <h1>Context API Theme Example</h1>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <Child />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggler />
    </ThemeProvider>
  );
}
