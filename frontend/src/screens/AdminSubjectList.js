import React, {useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import AdminSubjectTable from "../components/AdminSubjectTable";
import SubjectTimetable from "../components/SubjectTimetable";
const AdminSubjectList = () => {
  const [options, setOptions] = useState("subjectlist");
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
              onClick={() => setOptions("subjectlist")}
            >
              Quản lý thời gian biểu
            </div>
            <div className="break"></div>

            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("timetable")}
            >
              Quản lý câu hỏi
            </div>
            <div className="break"></div>
            <div
              style={{ color: "white", padding: "1.2rem", cursor: "pointer" }}
              onClick={() => setOptions("chitiet")}
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
            {options === "subjectlist" ? (
              <AdminSubjectTable />
            ) : options === "timetable" ? (
              <SubjectTimetable />
            ) : (
              ""
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminSubjectList;

