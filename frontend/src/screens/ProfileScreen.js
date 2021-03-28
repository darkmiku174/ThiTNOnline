import React from "react";
import students from "../studentSample";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const ProfileScreen = () => {
  const student = students.find((s) => (s.id = "1"));
  return (
    <Container style={{ backgroundColor: "black", height: "100%" }} fluid>
      <Row style={{ height: "100%" }}>
        <Col
          xs={4}
          style={{
            height: "95%",
            backgroundColor: "#2196f3",
            padding: " 0 5rem",
          }}
        >
          <Row
            style={{
              display: "fex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ width: "150px" }}>
              <img src={student.image} style={{ width: "100%" }} />
            </div>
            <Button variant="light">Đổi ảnh</Button>
          </Row>
          <Row
            style={{
              display: "fex",
              // alignItems: "center",
              flexDirection: "column",
              marginTop: "2rem",
            }}
          >
            <p>MSSV: {student.sbd}</p>
            <p>Họ & Tên: {student.name}</p>
            <p>Giới tính: {student.sex}</p>
            <p>Tình trạng học: {student.studyStatus}</p>
            <p>Niên khóa: {student.schoolYear}</p>
            <p>Email trường: {student.email}</p>
          </Row>
        </Col>
        <Col style={{ height: "95%", backgroundColor: "#87c095" }}></Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
