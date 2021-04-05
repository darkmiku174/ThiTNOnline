import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import DateTimePicker from "../components/DateTimePicker";

const TeacherAccount = () => {
  return (
    <Container>
      <Row>
        <Col
          className="w-25"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="/images/user.png" style={{ width: "90%" }} />
          <Button style={{ marginTop: "0.7rem" }}>Đổi ảnh</Button>
        </Col>
        <Col className="w-75">
          <h2>Thông tin giảng viên</h2>
          <div className="break"></div>
          <Form>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>Mã giảng viên:</Form.Label>
              <Form.Control placeholder="18dhddddddd"></Form.Control>
            </Form.Group>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>Họ tên:</Form.Label>
              <Form.Control placeholder="Nguyễn Hùng Vĩ"></Form.Control>
            </Form.Group>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>CMND:</Form.Label>
              <Form.Control placeholder="Nguyễn Hùng Vĩ"></Form.Control>
            </Form.Group>
            <Form.Group className="account-form-group" controlId="formID">
              <Form.Label>Địa chỉ:</Form.Label>
              <Form.Control placeholder="Nguyễn Hùng Vĩ"></Form.Control>
            </Form.Group>
            <Form.Group className="account-form-group">
              <Form.Label>Giới tính:</Form.Label>
              <Col>
                <Form.Check
                  type="radio"
                  label="Nam"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                />
                <Form.Check
                  type="radio"
                  label="Nữ"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                />
              </Col>
            </Form.Group>
            <Form.Group className="account-form-group">
              <Form.Label>Ngày sinh:</Form.Label>
              <DateTimePicker />
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default TeacherAccount;
