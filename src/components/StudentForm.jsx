import { useState, useEffect } from "react";
import { addStudent, updateStudent } from "../services/studentService";


export default function StudentForm({ selectedStudent, onFinish }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: ""
  });

  useEffect(() => {
    if (selectedStudent) setForm(selectedStudent);
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

    setForm({ name: "", phone: "", course: "" });
    onFinish(); // обновить список и сбросить редактирование
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Имя" value={form.name} onChange={handleChange} />
      <input name="phone" placeholder="Телефон" value={form.phone} onChange={handleChange} />
      <input name="course" placeholder="Курс" value={form.course} onChange={handleChange} />
      <button type="submit">
        {selectedStudent ? "Сохранить" : "Добавить"}
      </button>
    </form>
  );
}

<form
  onSubmit={handleSubmit}
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    marginBottom: "20px",
    maxWidth: "300px"
  }}
>
  <input
    name="name"
    placeholder="Имя"
    value={form.name}
    onChange={handleChange}
    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
  />

  <input
    name="phone"
    placeholder="Телефон"
    value={form.phone}
    onChange={handleChange}
    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
  />

  <input
    name="course"
    placeholder="Курс"
    value={form.course}
    onChange={handleChange}
    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
  />

  <button
    type="submit"
    style={{
      padding: "10px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer"
    }}
  >
    {selectedStudent ? "Сохранить" : "Добавить"}
  </button>
</form>