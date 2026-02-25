import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

export default function Home() {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setSelectedStudent(null);
    setRefreshKey((k) => k + 1);
  };

  return (
    <div>
      <StudentForm selectedStudent={selectedStudent} onFinish={refresh} />
      <StudentList key={refreshKey} onEdit={setSelectedStudent} />
    </div>
  );
}