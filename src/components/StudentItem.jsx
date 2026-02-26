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
        padding: "10px",
        border: "1px solid #eee",
        borderRadius: "8px",
        marginBottom: "10px"
      }}
    >
      <span>
        {student.name} | {student.phone} | {student.course}
      </span>

      <div style={{ display: "flex", gap: "8px" }}>
        <button
          onClick={() => onEdit(student)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#2196F3",
            color: "white",
            cursor: "pointer"
          }}
        >
          ✏️
        </button>

        <button
          onClick={handleDelete}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer"
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
}