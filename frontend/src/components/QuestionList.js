import React, {useEffect} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const QuestionList = () => {
  const dispatch = useDispatch();
  const exam = JSON.parse(localStorage.getItem("temp"));
  const {submittion} = useSelector(state => state.studentDidQuestion)

  useEffect(() => {
    if (submittion != null) {
      submittion.DapAnSV.map(s => document.getElementById(`${s.CauHoi}`).setAttribute("class", "btn btn-primary btn-sm"))
    }
  }, [submittion])

  return (
    <>
      {exam[0].DSCH.map((question, index) => (
        <Button
          id={`${question._id}`}
          className="btn btn-light"
          size="sm"
          onClick={(e) =>
            dispatch({type: "CHANGE_QUESTION_INDEX", payload: index})
          }
        >
          {index + 1}
        </Button>
      ))}
    </>
  );
};

export default QuestionList;
