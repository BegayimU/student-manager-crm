import { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { getStudents } from "../services/studentService";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(student => {
    if (filter === "all") return true;
    return student.status === filter;
  });

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Manager</h1>
      <p>Мини CRM для управления студентами</p>

      <StudentForm
        selectedStudent={selectedStudent}
        onFinish={() => {
          fetchStudents();
          setSelectedStudent(null);
        }}
      />

      <SearchBar />

      <FilterBar filter={filter} setFilter={setFilter} />

      <StudentList
        students={filteredStudents}
        onEdit={setSelectedStudent}
        onUpdate={fetchStudents}
      />
    </div>
  );
};

export default Home;