import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import TeacherAccount from "../components/TeacherAccount";

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
            className="child-row"
          >
            <Link
              to="/giangvien/taikhoan"
              style={{
                color: "white",
                padding: "1.2rem",
              }}
            >
              Quản lý tài khoản
            </Link>
            <div className="break"></div>
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
            <TeacherAccount />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherScreen;
