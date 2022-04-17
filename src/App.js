// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Forms from "./components/Forms";
import StudentSec from "./components/StudentSec";

function App() {
  const [studentName, setStudentName] = useState(""); //= Forms & AllStudent
  const [students, setStudents] = useState([]); //= StudentSec
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  return (
    <div className="App">
      {/* -------------------------- Student Form--------------------------- */}

      <Forms
        studentName={studentName}
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />

      {/* ------------------------------Student Sec---------------------------- */}

      <StudentSec
        setStudentName={setStudentName}
        students={students}
        setStudents={setStudents}
        editMode={editMode}
        setEditMode={setEditMode}
        editableStudent={editableStudent}
        setEditableStudent={setEditableStudent}
      />
    </div>
  );
}

export default App;
