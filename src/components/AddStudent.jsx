import { useForm } from "react-hook-form";
import "./AddStudent.css";

/*---- Functional Component ---*/
function AddStudent({ addStudent }) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  /*---- function to handle on submit ----*/
  function submitHandler(data) {
    addStudent(data);   // Insert student data into state (prop drilling)
    reset();            // Reset form
    alert("Student successfully added!");
  }

  /*---- UI ----*/
  return (
    <div className="add-student-container">
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label>Student ID:</label>
          <input {...register("studentId", { required: "Student ID required" })} />
          {errors.studentId && <p>{errors.studentId.message}</p>}
        </div>

        <div>
          <label>Name:</label>
          <input {...register("name", { required: "Name required" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            {...register("age", {
              required: "Age required",
              min: { value: 1, message: "Age must be greater than 0" },
            })}
          />
          {errors.age && <p>{errors.age.message}</p>}
        </div>

        <div>
          <label>Course:</label>
          <input {...register("course", { required: "Course required" })} />
          {errors.course && <p>{errors.course.message}</p>}
        </div>

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
