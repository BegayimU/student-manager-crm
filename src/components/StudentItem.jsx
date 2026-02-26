import { deleteStudent } from "../services/studentService";

export default function StudentItem({ student, onEdit, onChange }) {
  const handleDelete = async () => {
    await deleteStudent(student.id);
    onChange();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 16px",
        borderRadius: "14px",
        marginBottom: "12px",
        background: "linear-gradient(135deg,#6366f1,#22c55e,#f59e0b)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
        color: "white"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <strong style={{ fontSize: "15px" }}>👤 {student.name}</strong>
        <span style={{ fontSize: "13px", opacity: "0.9" }}>
          📞 {student.phone}
        </span>
        <span style={{ fontSize: "13px", opacity: "0.9" }}>
          🎓 {student.targetCourse || student.course}
        </span>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => onEdit(student)}
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "white",
            background: "linear-gradient(135deg,#3b82f6,#6366f1)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          ✏️
        </button>

        <button
          onClick={handleDelete}
          style={{
            padding: "8px 12px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            color: "white",
            background: "linear-gradient(135deg,#ef4444,#f87171)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
        >
          🗑
        </button>
      </div>
    </div>
  );
}