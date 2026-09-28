const categoryColors = {
  Produce: "#639922",
  Dairy: "#378ADD",
  Bakery: "#BA7517",
  "Canned Goods": "#D85A30",
  "Dry Goods": "#5F5E5A",
};

function InventoryCard({ item }) {
  const color = categoryColors[item.category] || "#5F5E5A";
  const isLowStock = item.quantity <= 5;

  return (
    <div className="inventory-card">
      <div className="card-dot" style={{ background: color }} />
      <div className="card-name">{item.name}</div>
      <div className="card-category">{item.category}</div>
      <div className={`card-quantity ${isLowStock ? "low-stock" : ""}`}>
        {item.quantity} {item.unit}
      </div>
    </div>
  );
}

export default InventoryCard;
