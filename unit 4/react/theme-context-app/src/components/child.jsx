import { useTheme } from "../context/ThemeContext";
import Grandchild from "./grandchild";

export default function Child() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#444",
        color: theme === "light" ? "#000" : "#fff",
        borderRadius: "8px"
      }}
    >
      <h2>Child Component</h2>
      <Grandchild />
    </div>
  );
}
