import React from "react";
import { Container, div, Col, Button, Table } from "react-bootstrap";
import dsDeThi from "../dethiSample";

const Dethi = () => {
  return (
    <div className="dsDeThi">
      <div className="filter mb-4">
        <div className="function">
          <div>
            Thời gian <i class="fas fa-chevron-down"></i>
          </div>
          <div>
            Lớp <i class="fas fa-chevron-down"></i>
          </div>
          <div>
            Kỳ thi <i class="fas fa-chevron-down"></i>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button>Add Exam</Button>
        </div>
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Time</th>
            <th>Number of question</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {dsDeThi.map((q) => (
            <tr>
              <td style={{ color: "blue", cursor: "pointer" }}>{q.id}</td>
              <td>{q.time}</td>
              <td>{q.questionNumber}</td>
              <td>{q.date}</td>
              <td>{q.type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Dethi;
