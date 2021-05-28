import React, {useState, useEffect} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import Answer from "../components/Answer";
import QuestionList from "../components/QuestionList";
import dsHocSinh from "../studentSample";
import {useDispatch, useSelector} from "react-redux";
import {postSubmittionAction} from "../actions/SubmittionActions";
import Timer from "../components/Timer";

const ExamDetailScreen = ({match, history}) => {
  const dispatch = useDispatch();

  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");

  const exam = JSON.parse(localStorage.getItem("exam"));
  const submittion = JSON.parse(localStorage.getItem("submittion"));

  const submitAnswersHandler = () => {
    dispatch(postSubmittionAction());
    history.push("/exams");
  };

  const goToNextQuestion = (index) => {
    {
      /*Will Add more code to full-fill this function*/
    }
    return;
  };

  const goToPrevQuestion = (index) => {
    {
      /*Will Add more code to full-fill this function*/
    }
    return;
  };

  const skipQuestion = (index) => {
    {
      /*Will Add more code to full-fill this function*/
    }
    return;
  };
  useEffect(() => {
    if (!localStorage.getItem("submittion")) {
      const idDe = JSON.parse(localStorage.getItem("exam"))[0]._id;
      const sinhvien = JSON.parse(localStorage.getItem("studentInfo"))._id;
      localStorage.setItem(
        "submittion",
        JSON.stringify({De: idDe, SinhVien: sinhvien, DapAnSV: []})
      );
    }
  }, []);

  return (
    <>
      {exam[0].DSCH != null && exam[0].DSCH.length > 0 ? (
        <Container className="normal-container" fluid>
          <Row className="parent-row">
            <Col className="left child-col">
              <Row className="child-row d-flex flex-column px-5">
                <Answer exam={exam} />
              </Row>
            </Col>
            <Col className="right child-col">
              <Row className="child-row">
                <div className="student-infor">
                  <div>Họ và tên: {hocsinh.name}</div>
                  <div>MSSV: {hocsinh.sbd}</div>
                  <div>Lớp: {hocsinh.class}</div>
                </div>
              </Row>
              <Row className="child-row">
                <Timer />
              </Row>
              <Row style={{marginTop: "1rem"}} className="child-row">
                <div className="question-list">
                  <QuestionList />
                </div>
              </Row>
              <Button
                className="btn btn-block"
                onClick={submitAnswersHandler}
                style={{marginTop: "2rem"}}
              >
                Kết thúc bài thi
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default ExamDetailScreen;
