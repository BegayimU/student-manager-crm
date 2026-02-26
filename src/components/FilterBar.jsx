const FilterBar = ({ filter, setFilter }) => {
  const buttonStyle = (type, gradient) => ({
    background: filter === type ? gradient : "rgba(255,255,255,0.2)",
    color: filter === type ? "white" : "#111",
    border: "none",
    padding: "10px 18px",
    borderRadius: "999px",
    cursor: "pointer",
    fontWeight: "600",
    backdropFilter: "blur(8px)",
    boxShadow:
      filter === type
        ? "0 8px 20px rgba(0,0,0,0.25)"
        : "0 4px 10px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    transform: filter === type ? "scale(1.05)" : "scale(1)"
  });

  return (
    <div
      style={{
        margin: "20px 0",
        padding: "12px",
        borderRadius: "16px",
        display: "flex",
        gap: "12px",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #6366f1, #22c55e, #f59e0b)",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
      }}
    >
      <button
        onClick={() => setFilter("all")}
        style={buttonStyle("all", "linear-gradient(135deg,#3b82f6,#6366f1)")}
      >
        🌍 All
      </button>

      <button
        onClick={() => setFilter("active")}
        style={buttonStyle("active", "linear-gradient(135deg,#22c55e,#4ade80)")}
      >
        ⚡ Active
      </button>

      <button
        onClick={() => setFilter("finished")}
        style={buttonStyle("finished", "linear-gradient(135deg,#ef4444,#f87171)")}
      >
        ✅ Finished
      </button>
    </div>
  );
};

export default FilterBar;