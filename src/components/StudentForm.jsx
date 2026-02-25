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