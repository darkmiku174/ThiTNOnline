import { Container, Table, Form, Button } from "react-bootstrap";
import dsCauHoi from "../questionsSample";
import AddQuestion from "../components/AddQuestion";
import { useState, useEffect } from "react";
import { listQuestion } from "../actions/QuestionActions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Questions = ({ idMH }) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const questionList = useSelector((state) => state.questionList);
  const { loading, error, questions } = questionList;

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(listQuestion());
    }
  }, [dispatch]);

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
        <AddQuestion show={show} onHide={() => setShow(false)} maMH={idMH} />
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
          {questions.map((q, index) =>
            q.MaMH === idMH ? (
              <tr key={index}>
                <td>{q._id}</td>
                <td>{q.PhanHoi}</td>
                <td>Very hard</td>
              </tr>
            ) : (
              ""
            )
          )}
        </tbody>
      </Table>
    </Container>
  );
};
export default Questions;
