import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Home = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Student Manager</h1>

      <StudentForm />
      <SearchBar />
      <FilterBar />
      <StudentList />
    </div>
  );
};

export default Home;