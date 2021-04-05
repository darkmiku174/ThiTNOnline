import React from "react";
import students from "../studentSample";
import { Container, Col, Row, Form, Button } from "react-bootstrap";

const ProfileScreen = () => {
  const student = students.find((s) => (s.id = "1"));
  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="right child-col">
          <Row
            style={{
              display: "fex",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#2196f3",
              border: "none",
              borderRadius: "0.625rem 0 0 0.625rem",
              height: "100%",
            }}
            className="child-row"
          >
            <div style={{ width: "150px" }}>
              <img src={student.image} style={{ width: "100%" }} />
            </div>
            <Button variant="light" style={{ marginTop: "1.2rem" }}>
              Đổi ảnh
            </Button>
            <div className="infor" style={{ marginTop: "2.7rem" }}>
              <p>MSSV: {student.sbd}</p>
              <p>Họ & Tên: {student.name}</p>
              <p>Giới tính: {student.sex}</p>
              <p>Tình trạng học: {student.studyStatus}</p>
              <p>Niên khóa: {student.schoolYear}</p>
              <p>Email trường: {student.email}</p>
            </div>
          </Row>
        </Col>
        <Col
          className="left child-col"
          style={{
            backgroundColor: "white",
            borderRadius: "0rem 0.625rem 0.625rem 0",
          }}
        >
          <Row
            style={{
              display: "fex",
              flexDirection: "column",
              borderRadius: "0 0.625rem 0.625rem 0",
              height: "100%",
            }}
            className="child-row"
          >
            <div>
              <h2>Thông tin khóa học</h2>
              <div className="break"></div>
              <p>Khóa học: Đại học chính quy khóa 2018</p>
              <p>Chức vụ:</p>
              <p>Đối tượng:</p>
              <p>Đoàn</p>
              <p>Ngày vào đoàn:</p>
              <p>Đảng:</p>
              <p>Ngày vào Đảng:</p>
              <p>Loại hình đào tạo: Đại Học Chính Quy (QC43)</p>
              <p>Lớp sinh viên: PM1808</p>
            </div>
            <div>
              <h2>Thông tin liên lạc</h2>
              <div className="break"></div>
              <p>Tôn giáo:</p>
              <p>Dân tộc:</p>
              <p>Quốc gia:</p>
              <p>Tỉnh thành:</p>
              <p>Quận huyện:</p>
              <p>Di động:</p>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
