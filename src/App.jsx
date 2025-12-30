import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";

function App() {
  const [students, setStudents] = useState([]);

  // Add student
  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  // Update student
  const updateStudent = (updatedStudent) => {
    setStudents(
      students.map((s) =>
        s.id === updatedStudent.id ? updatedStudent : s
      )
    );
  };

  // Delete student
  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <StudentList
              students={students}
              deleteStudent={deleteStudent} 
            />
          }
        />

        <Route
          path="/add"
          element={<AddStudent addStudent={addStudent} />}
        />

       <Route
  path="/update"
  element={
    <UpdateStudent
      students={students}
      updateStudent={updateStudent}
    />
  }
/>
        
      </Routes>
    </Router>
  );
}

export default App;
