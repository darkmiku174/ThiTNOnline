import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import AddExamForm from "./AddExamForm";
import AddExamQuestionList from "./AddExamQuestionList";
import AddExamSubjectList from "./AddExamSubjectList";
import { useDispatch } from "react-redux";
import { subjectDetailList } from "../../../actions/SubjectActions";

const AddExam = (exam) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    dispatch(subjectDetailList());
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
          <AddExamSubjectList />
          <AddExamQuestionList />
        </div>
      </Modal>
    </div>
  );
};

export default AddExam;
