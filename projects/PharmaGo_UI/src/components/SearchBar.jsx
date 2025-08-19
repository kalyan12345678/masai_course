import { useEffect, useMemo, useRef, useState } from "react";
import { debounce } from "../utils/debounce";

export default function SearchBar({
  value,
  onChange,           // (string) => void
  dataset,            // full medicines array (for suggestions)
  placeholder = "Search medicines…"
}) {
  const [input, setInput] = useState(value || "");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const containerRef = useRef(null);

  // Debounce feeding the final value up to parent
  const debouncedEmit = useMemo(
    () => debounce((v) => onChange?.(v), 300),
    [onChange]
  );

  // Keep local input in sync if parent resets
  useEffect(() => setInput(value || ""), [value]);

  const suggestions = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q) return [];
    // Basic starts-with, then contains
    const byName = dataset.filter(d =>
      d.name.toLowerCase().startsWith(q) || d.name.toLowerCase().includes(q)
    );
    // Unique top 8
    const uniqueNames = Array.from(new Set(byName.map(d => d.name)));
    return uniqueNames.slice(0, 8);
  }, [input, dataset]);

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) setShowSuggestions(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleChange = (e) => {
    const v = e.target.value;
    setInput(v);
    debouncedEmit(v);
    setShowSuggestions(true);
    setHighlight(-1);
  };

  const choose = (text) => {
    setInput(text);
    onChange?.(text);        // immediate when picked
    setShowSuggestions(false);
  };

  const onKeyDown = (e) => {
    if (!showSuggestions || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Enter") {
      if (highlight >= 0) {
        e.preventDefault();
        choose(suggestions[highlight]);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      <input
        value={input}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        aria-label="Search medicines"
        style={{
          width: "100%",
          padding: "10px 12px",
          border: "1px solid #ddd",
          borderRadius: 8,
          outline: "none"
        }}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          role="listbox"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: "105%",
            zIndex: 10,
            background: "#fff",
            border: "1px solid #eee",
            borderRadius: 8,
            boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
            margin: 0,
            padding: "6px 0",
            listStyle: "none",
            maxHeight: 240,
            overflowY: "auto"
          }}
        >
          {suggestions.map((s, i) => (
            <li
              key={s}
              role="option"
              aria-selected={i === highlight}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => choose(s)}
              onMouseEnter={() => setHighlight(i)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                background: i === highlight ? "#f5f7ff" : "transparent"
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
