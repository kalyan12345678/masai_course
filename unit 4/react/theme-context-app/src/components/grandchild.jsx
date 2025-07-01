import { useTheme } from "../context/ThemeContext";

export default function Grandchild() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        marginTop: "10px",
        padding: "10px",
        backgroundColor: theme === "light" ? "#ddd" : "#666",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "6px"
      }}
    >
      <h3>Grandchild Component</h3>
      <p>The theme is currently <strong>{theme}</strong>.</p>
    </div>
  );
}
