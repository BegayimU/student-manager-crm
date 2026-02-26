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

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        marginBottom: "20px",
        maxWidth: "400px"
      }}
    >
      <input
        name="name"
        placeholder="Имя"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Телефон"
        value={form.phone}
        onChange={handleChange}
      />

      <input
        name="targetCourse"
        placeholder="Целевой курс"
        value={form.targetCourse}
        onChange={handleChange}
      />

      <input
        name="preCourse"
        placeholder="Предкурс"
        value={form.preCourse}
        onChange={handleChange}
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
      >
        <option value="">Выберите статус</option>
        <option value="active">Active</option>
        <option value="finished">Finished</option>
      </select>

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        {selectedStudent ? "Сохранить" : "Добавить"}
      </button>
    </form>
  );
}