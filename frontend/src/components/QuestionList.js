import React from "react";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";

const QuestionList = () => {
  const dispatch = useDispatch();
  const exam = JSON.parse(localStorage.getItem("temp"));
  return (
    <>
      {exam[0].DSCH.map((question, index) => (
        <Button
          variant={"light"}
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
