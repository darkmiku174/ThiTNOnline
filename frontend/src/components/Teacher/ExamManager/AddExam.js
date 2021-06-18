import React, {useState, useEffect} from "react";
import {Button, Modal} from "react-bootstrap";
import AddExamQuestionList from "./AddExamQuestionList";
import AddExamSubjectList from "./AddExamSubjectList";
import {useDispatch} from "react-redux";
import {subjectDetailListAction} from "../../../actions/SubjectActions";
import TotalQuestion from "./TotalQuestion";

const AddExam = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    dispatch({type: "ADD_TEMP_EXAM", payload: {DSCH: []}})
  };

  useEffect(() => {
    dispatch(subjectDetailListAction());
  }, [dispatch]);

  return (
    <div className={"d-flex flex-column justify-content-between add-exam mb-4"}>
      <div>
        <Button onClick={(e) => setShow(true)}>Thêm đề thi</Button>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1.2rem",
          }}
        >
          <div className={"d-flex justify-content-between"}>
            <AddExamSubjectList />
            <TotalQuestion />
          </div>
          <AddExamQuestionList handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
};

export default AddExam;
