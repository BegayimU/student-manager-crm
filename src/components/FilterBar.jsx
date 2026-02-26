const FilterBar = ({ filter, setFilter }) => {
  return (
    <div style={{ margin: "20px 0", display: "flex", gap: "10px" }}>
      <button
        onClick={() => setFilter("all")}
        style={{
          background: filter === "all" ? "#2563eb" : "#e5e7eb",
          color: filter === "all" ? "white" : "black",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        All
      </button>

      <button
        onClick={() => setFilter("active")}
        style={{
          background: filter === "active" ? "#22c55e" : "#e5e7eb",
          color: filter === "active" ? "white" : "black",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Active
      </button>

      <button
        onClick={() => setFilter("finished")}
        style={{
          background: filter === "finished" ? "#ef4444" : "#e5e7eb",
          color: filter === "finished" ? "white" : "black",
          border: "none",
          padding: "8px 12px",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Finished
      </button>
    </div>
  );
};

export default FilterBar;