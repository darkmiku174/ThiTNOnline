import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import SubjectManagement from "../components/Admin/SubjectManagement";
import SideNav from "../components/SideNav";
import TeachersManagement from "../components/Admin/TeachersManagement";
import ClassManagement from "../components/Admin/ClassManagement";
import SubjectTimetable from "../components/Admin/SubjectTimetable";
import TeachersDetail from "../components/Admin/TeachersDetail";
const AdminScreen = () => {
  const [options, setOptions] = useState("teacher");
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
              onClick={() => setOptions("teacher")}
            >
              Quản lý giảng viên
            </div>

            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("class")}
            >
              Quản lý lớp học
            </div>

            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("subjectmanagement")}
            >
              Quản lý thời gian biểu
            </div>
            <div className="break"></div>

            {/*<div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("#")}
            >
              Quản lý câu hỏi
            </div>
            <div className="break"></div>
            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("#")}
            >
              Quản lý đề thi
            </div>*/}
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
            {options === "subjectmanagement" ? (
              <SubjectManagement />
            ) : options === "timetable" ? (
              <SubjectTimetable />
            ): options === "teacher" ? (
              <TeachersManagement />
            ) : options === "class" ? (
              <ClassManagement />
            ): options === "giangvien" ? (
              <TeachersDetail />
            ):(
              ""
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminScreen;

