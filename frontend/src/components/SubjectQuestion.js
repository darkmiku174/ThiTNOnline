import React from "react";
import { Container, Form, Table, Button } from "react-bootstrap";
import dsMonHoc from "../subjectSample";

const SubjectQuestion = ({ onClick }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="mb-4"
      >
        <Form inline>
          <Form.Control
            type="text"
            name="q"
            placeholder="Search subject..."
          ></Form.Control>
          <Button type="submit" variant="outline-success" className="ml-2 p-2">
            Search
          </Button>
        </Form>
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Môn học</th>
            <th style={{ width: "20%" }}>Number of question</th>
          </tr>
        </thead>
        <tbody>
          {dsMonHoc.map((q) => (
            <tr>
              <td
                onClick={onClick}
                style={{ color: "blue", cursor: "pointer" }}
              >
                {q.id}
              </td>
              <td>{q.tenMonHoc}</td>
              <td>{q.questionNumber}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SubjectQuestion;
