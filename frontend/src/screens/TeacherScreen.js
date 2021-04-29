import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import TeacherAccount from "../components/TeacherAccount";
import Questions from "../components/Questions";
import SubjectQuestion from "../components/SubjectQuestion";
import Dethi from "../components/Dethi";

const TeacherScreen = ({ location, match }) => {
  const [options, setOptions] = useState("account");
  const [idMh, setIdMh] = useState();
  useEffect(() => {
    console.log(location.hash.split("/")[0]);
  });

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
              <Dethi />
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
