import { useState } from "react";
import { useForm } from "react-hook-form";
import "./UpdateStudent.css";

// Functional Component
function UpdateStudent({ students, updateStudent }) {
  const { register, handleSubmit, reset } = useForm();
  const [foundStudent, setFoundStudent] = useState(null);
  const [searchId, setSearchId] = useState("");

  // Function to search student by ID
  const searchStudent = () => {
    const student = students.find((s) => s.studentId === searchId);

    if (!student) {
      alert("Student not found!");
      return;
    }

    setFoundStudent(student);
    reset(student);
  };

  // Function to handle form submission
  const submitHandler = (data) => {
    updateStudent({ ...data, id: foundStudent.id });
    alert("Student updated successfully!");
    reset();
    setFoundStudent(null);
    setSearchId("");
  };

  return (
    <div className="update-container">
      <h2 className="update-title">Update Student</h2>

      {/* Search Section */}
      <div className="search-box">
        <label>Enter Student ID</label>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="e.g. STU101"
        />
        <button onClick={searchStudent}>Search</button>
      </div>

      {/* Update Form */}
      {foundStudent && (
        <form className="update-form" onSubmit={handleSubmit(submitHandler)}>
          <div className="form-group">
            <label>Name</label>
            <input {...register("name")} />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input type="number" {...register("age")} />
          </div>

          <div className="form-group">
            <label>Course</label>
            <input {...register("course")} />
          </div>

          <button type="submit" className="update-btn">
            Update Student
          </button>
        </form>
      )}
    </div>
  );
}

export default UpdateStudent;
