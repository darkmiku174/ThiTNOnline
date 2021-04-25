import React from "react";
import { Container, Col, Row, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import DateTimePicker from "../components/DateTimePicker";

const TeacherManagement = () => {
  return (
    <Container>
      <Row >
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
         <Col
          className="w-25"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

          }}
        >
       <Form>
          <fieldset disabled>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Mã GV</Form.Label>
              <Form.Control id="disabledTextInput" placeholder="GV0001" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Họ và tên</Form.Label>
              <Form.Control id="disabledTextInput" placeholder="Đỗ Đức Minh" />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Giới tính</Form.Label>
              <Form.Control id="disabledTextInput" placeholder="Nam" />
            </Form.Group>
          </fieldset>
        </Form>
        </Col>
        <Col
          className="w-50"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

          }}
        >
       <Form>
          <fieldset disabled>
            <Form.Group>
              <Form.Label htmlFor="disabledTextInput">Email trường </Form.Label>
              <Form.Control id="disabledTextInput" placeholder="ddm@huflit.edu.vn" />
            </Form.Group>
          </fieldset>
        </Form>
        </Col>
      </Row>
      <Row>
          <Col
            className="w-50"
            style={{
              display: "flex",
              flexDirection: "column",

              border: "1px solid black",
              outline: "2px",
              borderBottom:"none",
              borderTop:"none",
              borderLeft:"none",
            }}
          >
            <h3 >Thông tin khóa học</h3>
            <Form.Label>Chức vụ: </Form.Label>
            <Form.Label>Đối tượng:</Form.Label>
            <Form.Label>Ngày vào Đảng:</Form.Label>
            <Form.Label>Danh sách các môn dạy: </Form.Label>
            <Form.Label>Thời gian công tác:</Form.Label>
            <Form.Label>Lớp phụ trách:</Form.Label>
          </Col>
           <Col
            className="w-50"
            style={{
              display: "flex",
              flexDirection: "column",

              border: "1px solid black",
              outline: "2px",
              borderBottom:"none",
              borderTop:"none",
              borderRight:"none",
            }}
          >
            <h3 >Thông tin liên lạc</h3>
            <Form.Label>Tôn giáo:</Form.Label>
            <Form.Label>Dân tộc:</Form.Label>
            <Form.Label>Quốc gia:</Form.Label>
            <Form.Label>Tỉnh thành:</Form.Label>
            <Form.Label>Quận huyện</Form.Label>
            <Form.Label>SĐT:</Form.Label>
          </Col>
      </Row>
      <Row>
      <Col
          className="w-100"
          style={{
            marginTop:"3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
       <Button>Thay đổi</Button>
       </Col>
      </Row>
    </Container>
  );
};

export default TeacherManagement;
