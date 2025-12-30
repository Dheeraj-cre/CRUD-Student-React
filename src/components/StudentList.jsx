import React from 'react';
import "./StudentList.css";

// Functional Component
function StudentList({ students }) {
  return (
    <div className="student-container">
      <h2 className="student-title">Student List</h2>

      {/* // Conditional Rendering */}

      {students.length === 0 ? (
        <p className="empty-text">No students available.</p>
      ) : (
        <table className="student-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.studentId}</td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
