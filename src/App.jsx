// import { db } from "./firebase";
// console.log(db);
import Home from "./pages/Home";
const handleAddStudent = (student) => {
  setStudents([...students, student]);
};

function App() {
  const handleAddStudent = (student) => {
  setStudents([...students, student]);
};
  return <Home />; 
}

export default App;