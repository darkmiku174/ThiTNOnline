import React, { useState } from "react";
import examDetails from "../examDetails.js";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
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
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="left child-col">
          <Row>
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
          </Row>
        </Col>
        <Col className="right child-col">
          <Row>
            <div className="student-infor">
              <div>Họ và tên: {hocsinh.name}</div>
              <div>MSSV: {hocsinh.sbd}</div>
              <div>Lớp: {hocsinh.class}</div>
            </div>
          </Row>
          <Row className="question-list" style={{ marginTop: "2rem" }}>
            {examDetail.questions.map((question) => (
              <Button variant="primary">{question.id}</Button>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamDetailScreen;
