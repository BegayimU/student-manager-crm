import { deleteStudent } from "../services/studentService";

export default function StudentItem({ student, onEdit, onChange }) {
  const handleDelete = async () => {
    await deleteStudent(student.id);
    onChange(); // обновить список
  };

  return (
    <div>
      <span>{student.name} | {student.phone} | {student.course}</span>
      <button onClick={() => onEdit(student)}>Редактировать</button>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
}