import React, { useState } from "react";
import examDetails from "../examDetails.js";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import Answer from "../components/Answer";
import dsHocSinh from "../studentSample";
const ExamDetailScreen = ({ match }) => {
  const examDetail = examDetails.find(
    (exam) => exam.examID === match.params.id
  );
  const [questionId, setquestionID] = useState("1");
  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");

  const question = examDetail.questions.find((q) => q.id === questionId);
  return (
    <div className="stHome">
      <div className="left-column">
        <div className="row">
          <h2 className="question">{question.question}</h2>
          {question.answers.map((answer) => (
            <Answer answer={answer} />
          ))}
          <div className="options">
            <Button variant="light">Câu trước</Button>
            {""}
            <Button variant="primary">Tiếp theo</Button>
            {""}
            <Button variant="danger">Bỏ qua</Button>
            {""}
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="row">
          <div className="student-infor">
            <div>Họ và tên: {hocsinh.name}</div>
            <div>MSSV: {hocsinh.sbd}</div>
            <div>Lớp: {hocsinh.class}</div>
          </div>
        </div>
        <div className="row question-list">
          {examDetail.questions.map((question) => (
            <Button variant="primary">{question.id}</Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamDetailScreen;
