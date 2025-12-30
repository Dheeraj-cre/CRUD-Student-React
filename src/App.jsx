import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import StudentList from "./components/StudentList";
import AddStudent from "./components/AddStudent";
import UpdateStudent from "./components/UpdateStudent";
import "./App.css"; 

function App() {
  const [students, setStudents] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchStudents = useCallback(async () => {
    try {
      const res = await fetch(`${API_URL}/students`);
      if (!res.ok) throw new Error("Fetch failed");
      const data = await res.json();
      setStudents(data);
    } catch (error) {
      console.error("Failed to fetch students", error);
    }
  }, [API_URL]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const addStudent = async (student) => {
    try {
      const res = await fetch(`${API_URL}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
      });
      if (!res.ok) throw new Error("Add failed");
      fetchStudents();
    } catch (error) {
      console.error("Failed to add student", error);
    }
  };

  const updateStudent = async (updatedStudent) => {
    try {
      const res = await fetch(
        `${API_URL}/students/${updatedStudent._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedStudent),
        }
      );
      if (!res.ok) throw new Error("Update failed");
      fetchStudents();
    } catch (error) {
      console.error("Failed to update student", error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      const res = await fetch(`${API_URL}/students/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      fetchStudents();
    } catch (error) {
      console.error("Failed to delete student", error);
    }
  };

  return (
    <Router>
      <Navbar />

      {/* Page content wrapper */}
      <main className="app-container">
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
      </main>
    </Router>
  );
}

export default App;
