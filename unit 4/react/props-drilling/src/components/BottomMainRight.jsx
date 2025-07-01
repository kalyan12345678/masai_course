// src/components/BottomMainRight.jsx
export default function BottomMainRight({ name }) {
  return (
    <div style={{ marginTop: "10px", padding: "10px", background: "#fff3e0" }}>
      <h4>Bottom Main Right</h4>
      <p>User's Name: <strong>{name || "No name entered"}</strong></p>
    </div>
  );
}
