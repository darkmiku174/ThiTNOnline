import { Container, Table, Form, Button } from "react-bootstrap";
import dsCauHoi from "../questionsSample";
import AddQuestion from "../components/AddQuestion";
import { useState } from "react";

const Questions = () => {
  const [show, setShow] = useState(false);
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
            placeholder="Search questions..."
          ></Form.Control>
          <Button type="submit" variant="outline-success" className="ml-2 p-2">
            Search
          </Button>
        </Form>
        <Button onClick={() => setShow(true)}>Add question</Button>
        <AddQuestion show={show} onHide={() => setShow(false)} />
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Câu hỏi</th>
            <th style={{ width: "20%" }}>Level</th>
          </tr>
        </thead>
        <tbody>
          {dsCauHoi.map((q) => (
            <tr>
              <td>{q.id}</td>
              <td>{q.question}</td>
              <td>Very hard</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default Questions;
