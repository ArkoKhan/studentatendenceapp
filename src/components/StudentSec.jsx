import React from "react";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";
import AbsentStudentList from "./AbsentStudentList";

function StudentSec(props) {
  // toggleHandler
  const toggleHandler = (id) => {
    const student = props.students.find((i) => i.id === id);
    props.setStudents(
      props.students.map((i) => {
        if (i.id === student.id) {
          i.isPresent = !i.isPresent;
        }
        return i;
      })
    );
  };
  return (
    <div className="students-sec">
      {/* ------------------------All Student------------------------------- */}
      <AllStudentList
        setStudentName={props.setStudentName}
        students={props.students}
        setStudents={props.setStudents}
        editMode={props.editMode}
        setEditMode={props.setEditMode}
        editableStudent={props.editableStudent}
        setEditableStudent={props.setEditableStudent}
      />

      {/* -------------------------------Present----------------------- */}
      <PresentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />

      {/* --------------------Absent---------------------- */}
      <AbsentStudentList
        students={props.students}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}

export default StudentSec;
