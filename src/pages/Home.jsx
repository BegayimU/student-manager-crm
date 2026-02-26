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
  <div
    style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "40px 20px",
      backgroundColor: "#f5f6fa"
    }}
  >
    {/* Заголовок */}
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1 style={{ marginBottom: "10px" }}>Student Manager</h1>
      <p style={{ color: "#666" }}>
        Мини CRM для управления студентами
      </p>
    </div>

    {/* Форма */}
    <div style={{ width: "100%", maxWidth: "500px", marginBottom: "40px" }}>
      <StudentForm
        selectedStudent={selectedStudent}
        onFinish={() => {
          fetchStudents();
          setSelectedStudent(null);
        }}
      />
    </div>

    {/* Поиск + Фильтр */}
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        marginBottom: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <SearchBar />
      <FilterBar filter={filter} setFilter={setFilter} />
    </div>

    {/* Список студентов */}
    <div style={{ width: "100%", maxWidth: "900px" }}>
      <StudentList
        students={filteredStudents}
        onEdit={setSelectedStudent}
        onUpdate={fetchStudents}
      />
    </div>
  </div>
);
};

export default Home;