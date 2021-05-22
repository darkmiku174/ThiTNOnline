import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import Answer from "../components/Answer";
import dsHocSinh from "../studentSample";
import {listQuestion} from "../actions/QuestionActions";
import {useDispatch, useSelector} from "react-redux";
const ExamDetailScreen = ({match, history}) => {
  console.log("render")

  const [question, setQuestion] = useState({})

  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");

  const submitAnswersHandler = () => {
    history.push(`/exams/details/${match.params.id}/finish`);
  };

  const routeToQuestion = (id) => {
    history.push(`/exams/details/${id}`);
  }

  {/*UseDispatch*/}
  const dispatch = useDispatch();

  {/*STATE*/}
  const questionList = useSelector((state) => state.questionList);

  const {loading, error, questions} = questionList;

  useEffect(() => {
    if (Object.keys(questions).length === 0 && loading == null) {
      dispatch(listQuestion())
    }
    else if (Object.keys(questions).length > 0) {
      setQuestion(questions.find(q => q._id === match.params.id));
    }
  }, [dispatch, questions, match.params.id])

  return (
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="left child-col">
          <Row className="child-row d-flex flex-column px-5">
            <h2 className="question">{question.PhanHoi}</h2>
            <Answer question={question} />
            <div className="options">
              <div>
                <Button variant="light" className="mr-3"
                  onClick={e => routeToQuestion(questions[questions.findIndex(q => q._id === match.params.id) - 1]._id)}
                >Câu trước</Button>
                {""}
                <Button variant="primary"
                  onClick={e => routeToQuestion(questions[questions.findIndex(q => q._id === match.params.id) + 1]._id)}
                >Tiếp theo</Button>
                {""}
              </div>
              <div className="d-flex flex-grow-1 justify-content-end">
                <Button variant="danger">Bỏ qua</Button></div>
              {""}
            </div>
          </Row>
        </Col>
        <Col className="right child-col">
          <Row className="child-row">
            <div className="student-infor">
              <div>Họ và tên: {hocsinh.name}</div>
              <div>MSSV: {hocsinh.sbd}</div>
              <div>Lớp: {hocsinh.class}</div>
            </div>
          </Row>
          <Row style={{marginTop: "1rem"}} className="child-row">
            <div className="question-list">
              {questions.map((question, index) => (
                <Button variant="primary"
                  onClick={e => routeToQuestion(question._id)}
                >{index}</Button>
              ))}
            </div>
          </Row>
          <Button
            className="btn btn-block"
            onClick={submitAnswersHandler}
            style={{marginTop: "2rem"}}
          >
            Kết thúc bài thi
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ExamDetailScreen;
