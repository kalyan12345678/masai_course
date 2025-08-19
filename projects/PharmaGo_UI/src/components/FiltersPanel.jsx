import { useMemo } from "react";

export default function FiltersPanel({
  allItems,
  filters,
  onChange // (nextFilters) => void
}) {
  // Derive facet lists from the dataset
  const facets = useMemo(() => {
    const categories = Array.from(new Set(allItems.map(i => i.category))).sort();
    const brands = Array.from(new Set(allItems.map(i => i.brand))).sort();
    const maxPrice = Math.ceil(Math.max(...allItems.map(i => i.price || 0)) || 0);
    return { categories, brands, maxPrice };
  }, [allItems]);

  const set = (patch) => onChange({ ...filters, ...patch });

  return (
    <div style={{ display: "grid", gap: 16 }}>
      {/* Category */}
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Category</div>
        <div style={{ display: "grid", gap: 6 }}>
          {facets.categories.map(cat => {
            const checked = filters.categories?.includes(cat) || false;
            return (
              <label key={cat} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => {
                    const next = new Set(filters.categories || []);
                    e.target.checked ? next.add(cat) : next.delete(cat);
                    set({ categories: Array.from(next) });
                  }}
                />
                <span>{cat}</span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Brand */}
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Brand</div>
        <select
          value={filters.brand || ""}
          onChange={(e) => set({ brand: e.target.value || null })}
          style={{ width: "100%", padding: "8px", borderRadius: 8, border: "1px solid #ddd" }}
        >
          <option value="">All brands</option>
          {facets.brands.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {/* Price */}
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Max Price (₹)</div>
        <input
          type="range"
          min={0}
          max={facets.maxPrice || 0}
          value={filters.maxPrice ?? facets.maxPrice}
          onChange={(e) => set({ maxPrice: Number(e.target.value) })}
          style={{ width: "100%" }}
        />
        <div style={{ fontSize: 12, color: "#555" }}>
          Up to ₹{filters.maxPrice ?? facets.maxPrice}
        </div>
      </div>

      {/* Stock */}
      <div>
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <input
            type="checkbox"
            checked={!!filters.inStockOnly}
            onChange={(e) => set({ inStockOnly: e.target.checked })}
          />
          <span>In stock only</span>
        </label>
      </div>

      {/* Sort */}
      <div>
        <div style={{ fontWeight: 600, marginBottom: 8 }}>Sort by</div>
        <select
          value={filters.sortBy || "relevance"}
          onChange={(e) => set({ sortBy: e.target.value })}
          style={{ width: "100%", padding: "8px", borderRadius: 8, border: "1px solid #ddd" }}
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating_desc">Rating</option>
          <option value="name_asc">Name A–Z</option>
        </select>
      </div>
    </div>
  );
}
