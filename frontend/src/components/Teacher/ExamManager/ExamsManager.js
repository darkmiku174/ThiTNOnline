import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";
import {examListAction} from "../../../actions/ExamActions";
import {listQuestion} from "../../../actions/QuestionActions";
import {useDispatch} from "react-redux";
import ExamList from "./ExamList";
import AddExam from "./AddExam";

const ExamsManager = () => {
  const dispatch = useDispatch()
  const [mode, setMode] = useState(0);

  const switchManagerMode = () => {
    if (mode === 0) {
      return setMode(1)
    }
    return setMode(0)
  }

  useEffect(() => {
    if (mode === 0)
      dispatch(examListAction())
    else
      dispatch(listQuestion())
  }, [mode]);

  return (
    <>
      <div className={"exam-manager"}>
        <div className={"exam-manager-header"}>
          {mode === 0 ?
            <>
              <div className={"exam-manager-filter"}>
                <div>filter 1</div>
                <div>filter 2</div>
                <div>filter 3</div>
              </div>
              <Button onClick={switchManagerMode}>Thêm đề thi</Button>
            </>
            :
            <div>
              <button className={"btn btn-light"} onClick={switchManagerMode}>Quay lại</button>
            </div>}
        </div>
        <div className={"exam-manager-body"}>
          {mode === 0
            ? <ExamList />
            : <AddExam />
          }
        </div>
      </div>
    </>
  );
};

export default ExamsManager;
