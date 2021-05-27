import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const TestScreen = () => {
  return (
    <Container
      className="normal-container"
      style={{
        backgroundColor: "cyan",
      }}
      fluid
    >
      <Row style={{ width: "100%" }}>
        <Col className="child-col" xs={4} style={{ backgroundColor: "green" }}>
          <Row>Row 1</Row>
          <Row>Row 2</Row>
        </Col>
        <Col className="child-col" style={{ backgroundColor: "blue" }}>
          COLUMNS 2
        </Col>
      </Row>
    </Container>
  );
};

export default TestScreen;
