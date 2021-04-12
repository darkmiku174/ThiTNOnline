import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TeacherAccount from "../components/TeacherAccount";
import Questions from "../components/Questions";
import SubjectQuestion from "../components/SubjectQuestion";
import Dethi from "../components/Dethi";

const TeacherScreen = () => {
  const [options, setOptions] = useState("account");

  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row">
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
            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("account")}
            >
              Quản lý tài khoản
            </div>
            <div className="break"></div>

            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("cauhoi")}
            >
              Quản lý câu hỏi
            </div>
            <div className="break"></div>
            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("dethi")}
            >
              Quản lý đề thi
            </div>
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
            {options === "account" ? (
              <TeacherAccount />
            ) : options === "cauhoi" ? (
              <SubjectQuestion onClick={() => setOptions("question-details")} />
            ) : options === "question-details" ? (
              <Questions />
            ) : options === "dethi" ? (
              <Dethi />
            ) : (
              ""
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherScreen;
