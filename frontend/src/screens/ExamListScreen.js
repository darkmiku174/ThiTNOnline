import React from "react";
import BaiThi from "../components/BaiThi";
import dsBaiThi from "../examSample.js";
import dsHocSinh from "../studentSample.js";
import { Container, Row, Col, Card } from "react-bootstrap";

const ExamListScreen = () => {
  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");
  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="left child-col">
          <Row className="exam-list">
            {dsBaiThi.map((baithi) => (
              <BaiThi baithi={baithi} />
            ))}
          </Row>
        </Col>
        <Col className="right child-col">
          <Row>
            <Card
              className="student-exam-infor"
              style={{
                boxShadow: "none",
                width: "100%",
              }}
            >
              <Card.Img
                src="/images/user.png"
                style={{ width: "150px", margin: "auto" }}
                className="text-center"
              />
              <Card.Body style={{ textAlign: "center" }}>
                <Card.Title>{hocsinh.name}</Card.Title>
                <Card.Text>SBD: {hocsinh.sbd}</Card.Text>
                <Card.Text>Lớp: {hocsinh.class}</Card.Text>
              </Card.Body>
              <div className="break"></div>
              <Card.Text>
                Số bài thi đã hoàn thành: {hocsinh.testComplete}
              </Card.Text>
              <Card.Text>Vắng: {hocsinh.testNotComplete}</Card.Text>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamListScreen;
