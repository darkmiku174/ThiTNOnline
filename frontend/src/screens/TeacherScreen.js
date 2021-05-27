import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import TeacherAccount from "../components/Teacher/TeacherAccount";
import Questions from "../components/Teacher/QuestionManager/Questions";
import SubjectQuestion from "../components/Teacher/QuestionManager/SubjectQuestion";
import ExamsManager from "../components/Teacher/ExamManager/ExamsManager";

const TeacherScreen = ({ location, match }) => {
  const [options, setOptions] = useState("account");
  const [idMh, setIdMh] = useState();
  console.log(location.hash);
  useEffect(() => {
    console.log(location.hash.split("/")[1]);
  });

  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row shadow">
        <Col className="w-25 child-col">
          <Row
            style={{
              display: "fex",
              flexDirection: "column",
              height: "100%",
              backgroundColor: "#2196f3",
              border: "none",
              borderRadius: "0.625rem 0 0 0.625rem",
              padding: "0",
            }}
            className="child-row side-bar"
          >
            <Link
              to="#account"
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
            >
              Quản lý tài khoản
            </Link>
            <div className="break"></div>

            <Link
              to="#cauhoi"
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
            >
              Quản lý câu hỏi
            </Link>
            <div className="break"></div>
            <Link
              to="#dethi"
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
            >
              Quản lý đề thi
            </Link>
          </Row>
        </Col>
        <Col
          className="w-75 child-col"
          style={{
            borderRadius: "0rem 0.625rem 0.625rem 0",
          }}
        >
          <Row
            style={{
              height: "100%",
              borderRadius: "0 0.625rem 0.625rem 0",
              display: "flex",
              flexDirection: "column",
            }}
            className="child-row"
          >
            {location.hash === "#cauhoi" ? (
              <SubjectQuestion />
            ) : location.hash.split("/")[0] === "#dscauhoi" ? (
              <Questions idMH={location.hash.split("/")[1]} />
            ) : location.hash === "#dethi" ? (
              <ExamsManager />
            ) : (
              <TeacherAccount />
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(TeacherScreen);
