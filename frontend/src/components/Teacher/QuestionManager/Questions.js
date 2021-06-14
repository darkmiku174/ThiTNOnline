import {Container, Table, Form, Button, Modal, Alert} from "react-bootstrap";
import Announcement from "../../GlobalComponents/Announcement";
import React, {useState, useEffect} from "react";
import {
  deleteQuestionAction,
  getQuestionListBySubjectAction,
} from "../../../actions/QuestionActions";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import AddQuestionModal from "./AddQuestionModal";
import QuestionDetails from "./QuestionDetails";
import {DELETE_QUESTION_RESET} from "../../../constants/QuestionConstants";

const Questions = ({idMH}) => {
  console.log("render")
  const dispatch = useDispatch();
  const {loading, error, questions} = useSelector(
    (state) => state.questionListBySubject
  );
  const questionCreate = useSelector((state) => state.questionCreate);
  const {questionCreated} = questionCreate;
  const {loading:deleteLoading,error:deleteError,message} = useSelector(state=>state.deleteQuestion)

  const [show, setShow] = useState(false);
  const [detailsShow, setDetailsShow] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [questionDetails, setQuestionDetails] = useState({});

  const closeDialog = () => {
    setShowDialog(false);
  };

  const showQuestionDetails=(q)=>{
    setDetailsShow(true)
    setQuestionDetails(q)
  }

  const deleteQuestion=(id)=>{
    dispatch(deleteQuestionAction(id))
  }

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
      if(loading == null || message){
        dispatch({type:DELETE_QUESTION_RESET})
        dispatch(getQuestionListBySubjectAction(idMH));
      }
  }, [idMH,message]);

  return (
      <>

        <Modal show={detailsShow} onHide={() => setDetailsShow(false)} size={"lg"}>
          <Modal.Header closeButton/>
          <QuestionDetails questionDetails={questionDetails}/>
        </Modal>
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
            <td/>
          </tr>
        </thead>
        <tbody>
          {questions != null
            ? questions.map((q, index) => (
              <tr key={index} id={q._id}>
                <td className={"text-primary"} style={{cursor:"pointer"}} onClick={()=>showQuestionDetails(q)}>
                  {q._id}
                </td>
                <td>{q.PhanHoi}</td>
                <td>Very hard</td>
                <td>
                  <div className={"text-danger d-flex justify-content-center"}>
                    <i className="fas fa-trash p-1" style={{cursor:"pointer"}} onClick={() => deleteQuestion(q._id)}/>
                  </div>
                </td>
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
      </>
  );
};
export default Questions;
