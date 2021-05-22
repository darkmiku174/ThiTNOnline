import React, {useState, useEffect} from "react";
import {
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import Answer from "../components/Answer";
import dsHocSinh from "../studentSample";
import {listQuestion} from "../actions/QuestionActions";
import {useDispatch, useSelector} from "react-redux";
const ExamDetailScreen = ({match, history}) => {
  console.log("render")
  {/*UseDispatch*/}
  const dispatch = useDispatch();

  const hocsinh = dsHocSinh.find((hocsinh) => hocsinh.id === "1");

  {/*STATE*/}
  const questionList = useSelector((state) => state.questionList);
  const {loading, error, questions} = questionList;
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (questions.length === 0 && loading == null) {
      dispatch(listQuestion())
    }
  }, [dispatch, match.params.id])

  const submitAnswersHandler = () => {
    history.push(`/exams/details/${match.params.id}/finish`);
  };

  const goToNextQuestion=(index) =>{
    {/*Will Add more code to full-fill this function*/}
    return;
  }

  const goToPrevQuestion=(index) =>{
    {/*Will Add more code to full-fill this function*/}
    return;
  }

  const skipQuestion=(index) =>{
    {/*Will Add more code to full-fill this function*/}
    return;
  }

  return (
      <>
        {
          questions != null && questions.length>0 ?
    <Container className="normal-container" fluid>
      <Row className="parent-row">
        <Col className="left child-col">
          <Row className="child-row d-flex flex-column px-5">
            <h2 className="question">{questions[currentIndex].PhanHoi}</h2>
            <Answer question={questions[currentIndex]} />
            <div className="options">
              <div>
                <Button variant="light" className="mr-3"
                  onClick={e => currentIndex > 1 ? setCurrentIndex(currentIndex - 1) : ""}
                >Câu trước</Button>
                {""}
                <Button variant="primary"
                  onClick={e => currentIndex < questions.length-1 ? setCurrentIndex(currentIndex+1):""}
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
                  onClick={e => setCurrentIndex(index)}
                >{index + 1}</Button>
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
    </Container>:""
        }
      </>
  );
};

export default ExamDetailScreen;
