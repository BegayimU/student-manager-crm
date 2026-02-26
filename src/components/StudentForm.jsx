import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/studentService";

export default function StudentForm({ selectedStudent, onFinish }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    targetCourse: "",
    preCourse: "",
    status: ""
  });

  useEffect(() => {
    if (selectedStudent) {
      setForm(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedStudent) {
      await updateStudent(selectedStudent.id, form);
    } else {
      await addStudent(form);
    }

    setForm({
      name: "",
      phone: "",
      targetCourse: "",
      preCourse: "",
      status: ""
    });

    onFinish();
  };

  const inputStyle = {
    padding: "12px 14px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.75)",
    boxShadow: "inset 0 2px 6px rgba(0,0,0,0.15)",
    fontSize: "14px",
    transition: "0.3s"
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        padding: "24px",
        borderRadius: "18px",
        marginBottom: "20px",
        maxWidth: "420px",
        background: "linear-gradient(135deg,#6366f1,#22c55e,#f59e0b)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.25)"
      }}
    >
      <h2 style={{ textAlign: "center", color: "white", marginBottom: "6px" }}>
        🎓 Student Form
      </h2>

      <input
        style={inputStyle}
        name="name"
        placeholder="👤 Имя студента"
        value={form.name}
        onChange={handleChange}
      />

      <input
        style={inputStyle}
        name="phone"
        placeholder="📞 Телефон"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        style={inputStyle}
        name="targetCourse"
        placeholder="🎯 Целевой курс"
        value={form.targetCourse}
        onChange={handleChange}
      />

      <input
        style={inputStyle}
        name="preCourse"
        placeholder="📘 Предкурс"
        value={form.preCourse}
        onChange={handleChange}
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        style={{
          ...inputStyle,
          cursor: "pointer"
        }}
      >
        <option value="">📌 Выберите статус</option>
        <option value="active">🟢 Active</option>
        <option value="finished">🔴 Finished</option>
      </select>

      <button
        type="submit"
        style={{
          marginTop: "8px",
          padding: "12px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontWeight: "600",
          letterSpacing: "0.5px",
          color: "white",
          background: selectedStudent
            ? "linear-gradient(135deg,#22c55e,#4ade80)"
            : "linear-gradient(135deg,#3b82f6,#6366f1)",
          boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
          transition: "0.3s",
          transform: "scale(1)"
        }}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      >
        {selectedStudent ? "💾 Сохранить" : "➕ Добавить"}
      </button>
    </form>
  );
}