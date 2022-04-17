// rfce = React Funtional Cpmponent Export

import React from "react";

function Forms(props) {
  const createStudentHandler = () => {
    if (props.studentName) {
      const newStudent = {
        name: props.studentName,
        id: Date.now(),
      };
      props.setStudents([...props.students, newStudent]);
      props.setStudentName("");
    } else {
      alert("Invalid");
    }
  };

  //  updateStudentHandler
  const updateStudentHandler = () => {
    props.setStudents(
      props.students.map((student) => {
        if (student.id === props.editableStudent.id) {
          student.name = props.studentName;
        }
        return student;
      })
    );
    props.setEditMode(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler();
      }}
    >
      <input
        type="text"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      />

      {/*  add button names */}
      <button className="btn-main">
        {props.editMode ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default Forms;
