import { useState, useEffect } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import { getStudents } from "../services/studentService";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const fetchStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Manager</h1>

      <StudentForm
        selectedStudent={selectedStudent}
        onFinish={() => {
          fetchStudents();
          setSelectedStudent(null);
        }}
      />

      <SearchBar />
      <FilterBar />

      <StudentList
        students={students}
        onEdit={setSelectedStudent}
        onUpdate={fetchStudents}
      />
    </div>
  );
};

export default Home;