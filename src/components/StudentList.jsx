import { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";
import StudentItem from "./StudentItem";

export default function StudentList({ onEdit }) {
  const [students, setStudents] = useState([]);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  return (
    <div>
      {students.map((s) => (
        <StudentItem
          key={s.id}
          student={s}
          onEdit={onEdit}
          onChange={loadStudents}
        />
      ))}
    </div>
  );
}