import React, {useEffect, useState} from "react";
import {examListAction} from "../../../actions/ExamActions";
import {useDispatch} from "react-redux";
import ExamList from "./ExamList";
import AddExam from "./AddExam";

const ExamsManager = () => {
  const dispatch = useDispatch();
  const [exam, setExam] = useState();
  dispatch(examListAction());
  const goToExam = (ex) => {
    setExam(ex);
  };

  return (
    <>
      <div className={"exam-manager"}>
        <AddExam exam={exam} />
        <div className={"exam-manager-body"}>
          <ExamList goToExam={goToExam} />
        </div>
      </div>
    </>
  );
};

export default ExamsManager;
