import {Container, Table, Form, Button} from "react-bootstrap";
import AddQuestion from "./AddQuestion";
import Announcement from "../../GlobalComponents/Announcement";
import {useState, useEffect} from "react";
import {
  listQuestion,
  getQuestionListBySubjectAction,
} from "../../../actions/QuestionActions";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import AddQuestionModal from "./AddQuestionModal";

const Questions = ({idMH}) => {
  const [show, setShow] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const dispatch = useDispatch();
  const {loading, error, questions} = useSelector(
    (state) => state.questionListBySubject
  );
  const questionCreate = useSelector((state) => state.questionCreate);
  const {questionCreated} = questionCreate;

  const closeDialog = () => {
    setShowDialog(false);
  };

  const scrollToQuestion = () => {
    setShow(false);
    setShowDialog(false);
    setScroll(true);
  };

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollTop(true);
    } else {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    if (
      questionCreated != null &&
      Object.keys(questionCreated).length !== 0 &&
      scroll === false &&
      show == true
    ) {
      setShowDialog(true);
    }

    if (scroll === true) {
      var elemnt = document.getElementById(questionCreated._id);
      elemnt.scrollIntoView();
      setScroll(false);
    }
  }, [dispatch, questionCreated, questions, scroll, opacity]);

  useEffect(() => {
    dispatch(getQuestionListBySubjectAction(idMH));
  }, [idMH]);

  return (
    <Container>
      {showDialog === true ? (
        <Announcement
          header="question created"
          body={questionCreated.PhanHoi}
          btns={[
            {onClick: closeDialog, text: "Close"},
            {onClick: scrollToQuestion, text: "Go"},
          ]}
        />
      ) : (
        ""
      )}
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
          />
          <Button type="submit" variant="outline-success" className="ml-2 p-2">
            Search
          </Button>
        </Form>
        <Button onClick={() => setShow(true)}>Add question</Button>
        {show ? (
          // <AddQuestion show={show} onHide={() => setShow(false)} maMH={idMH} />
            <AddQuestionModal show={show} handleClose={() =>setShow(false)}/>
        ) : (
          ""
        )}
      </div>
      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Câu hỏi</th>
            <th style={{width: "20%"}}>Level</th>
          </tr>
        </thead>
        <tbody>
          {questions != null
            ? questions.map((q, index) => (
              <tr key={index} id={q._id}>
                <td>{q._id}</td>
                <td>{q.PhanHoi}</td>
                <td>Very hard</td>
              </tr>
            ))
            : ""}
        </tbody>
      </Table>
      {scrollTop ? (
        <Button
          style={{
            borderRadius: "50%",
            position: "fixed",
            bottom: "5px",
            right: "12px",
          }}
          onClick={(e) => (document.documentElement.scrollTop = 0)}
        >
          <i className="fas fa-arrow-up" />
        </Button>
      ) : (
        ""
      )}
    </Container>
  );
};
export default Questions;
