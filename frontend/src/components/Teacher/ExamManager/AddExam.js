import React from 'react'
import AddExamForm from "./AddExamForm";
import AddExamQuestionList from "./AddExamQuestionList";

const AddExam = () => {
  return (
    <div className={"d-flex flex-column justify-content-between add-exam"}>
      <AddExamForm />
      <AddExamQuestionList />
    </div>
  )
}

export default AddExam

