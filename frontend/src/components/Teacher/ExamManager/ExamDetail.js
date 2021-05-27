import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { examAction } from "../../../actions/ExamActions";
import AddExamForm from "./AddExamForm";
import AddExamQuestionList from "./AddExamQuestionList";

const ExamDetail = ({ id }) => {
  console.log(id);
  const dispatch = useDispatch();
  const { loading, error, exam } = useSelector((state) => state.exam);

  useEffect(() => {
    if (exam == null) {
      dispatch(examAction(id));
    }
  }, [exam]);

  return (
    <div className={"addd-exam-exam-detail"}>
      <AddExamForm />
      <AddExamQuestionList />
    </div>
  );
};

export default ExamDetail;
