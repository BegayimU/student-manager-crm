import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import { getStudents } from "../services/studentService";

const Home = () => {
  const location = useLocation();

  const getFilterFromPath = () => {
    if (location.pathname === "/active") return "active";
    if (location.pathname === "/finished") return "finished";
    return "all";
  };

  const filter = getFilterFromPath();

  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filteredStudents = students.filter((student) => {
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

      {/* Router Filter */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>All</Link>
        <Link to="/active" style={{ marginRight: "15px" }}>Active</Link>
        <Link to="/finished">Finished</Link>
      </div>

      <StudentList
        students={filteredStudents}
        onEdit={setSelectedStudent}
        onUpdate={fetchStudents}
      />
    </div>
  );
};

export default Home;