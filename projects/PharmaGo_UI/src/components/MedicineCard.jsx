export default function MedicineCard({ item }) {
  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 12,
      padding: 12,
      display: "grid",
      gap: 6
    }}>
      <div style={{ fontWeight: 600 }}>{item.name}</div>
      <div style={{ color: "#666", fontSize: 12 }}>{item.brand} • {item.category}</div>
      <div style={{ fontWeight: 600 }}>₹{item.price}</div>
      <div style={{ fontSize: 12, color: item.inStock ? "#1a7f37" : "#a00" }}>
        {item.inStock ? "In stock" : "Out of stock"}
      </div>
      <div style={{ fontSize: 12 }}>⭐ {item.rating ?? "-"}</div>
    </div>
  );
}
