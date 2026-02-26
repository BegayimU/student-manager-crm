import StudentItem from "./StudentItem";

export default function StudentList({ students, onEdit, onUpdate }) {
  return (
    <div
      style={{
        padding: "16px",
        borderRadius: "20px",
        background: "linear-gradient(135deg,#0f172a,#1e293b)",
        boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
        maxWidth: "520px",
        margin: "0 auto"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "14px",
          letterSpacing: "1px"
        }}
      >
        📋 Student List
      </h2>

      {students.length === 0 ? (
        <p style={{ textAlign: "center", color: "#cbd5f5" }}>
          Пока нет студентов 🚀
        </p>
      ) : (
        students.map((s) => (
          <StudentItem
            key={s.id}
            student={s}
            onEdit={onEdit}
            onChange={onUpdate}
          />
        ))
      )}
    </div>
  );
}