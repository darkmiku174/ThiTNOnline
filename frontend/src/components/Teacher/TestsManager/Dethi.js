import React,{useState} from "react";
import { Container, div, Col, Button, Table } from "react-bootstrap";
import dsDeThi from "../../../dethiSample";
import AddExamModal from "./AddExamModal";

const Dethi = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="dsDeThi">
      <div className="filter mb-4">
        <div className="function">
          <div>
            Thời gian <i className="fas fa-chevron-down"/>
          </div>
          <div>
            Lớp <i className="fas fa-chevron-down"/>
          </div>
          <div>
            Kỳ thi <i className="fas fa-chevron-down"/>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          {/*Click this button => show change => rerender component => modal show*/}
          {/*Go to AddExamModal to understand what is happening behind the sences*/}
          <Button onClick={e => setShow(true)}>Add Exam</Button>
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
      <AddExamModal show={show} handleClose={e => setShow(false)}/>
    </div>
  );
};

export default Dethi;
