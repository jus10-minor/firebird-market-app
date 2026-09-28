import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import Header from "./components/header";
import InventoryCard from "./components/inventoryCard";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("Inventory");

  useEffect(() => {
    async function fetchItems() {
      const { data, error } = await supabase
        .from("inventory")
        .select("*")
        .order("category", { ascending: true });

      if (error) setError(error.message);
      else setItems(data);
      setLoading(false);
    }
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="app">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search inventory"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {loading && <p>Loading inventory...</p>}
        {error && <p>Error loading inventory: {error}</p>}

        {!loading && !error && (
          <div className="inventory-grid">
            {filteredItems.length === 0 ? (
              <p>No items found.</p>
            ) : (
              filteredItems.map((item) => (
                <InventoryCard key={item.id} item={item} />
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
