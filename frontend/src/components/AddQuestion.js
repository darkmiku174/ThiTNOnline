import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { listQuestion, createQuestion } from "../actions/QuestionActions";
import { useSelector, useDispatch } from "react-redux";
import { QUESTION_CREATE_RESET } from "../constants/QuestionConstants";
import QuestionsType from "./QuestionTypes";

const AddQuestion = ({ show, onHide, maMH }) => {
  const [phanHoi, setPhanHoi] = useState({});
  const [cauA, setCauA] = useState("");
  const [cauB, setCauB] = useState("");
  const [cauC, setCauC] = useState("");
  const [cauD, setCauD] = useState("");
  const [dapAn, setDapAn] = useState("A");
  const [diem, setDiem] = useState(0.25);
  const [phanLoai, setPhanLoai] = useState(0);
  const [internalShow, setInternalShow] = useState(show);
  const [questionType, setQuestionType] = useState(0);
  const [selection, setSelection] = useState("");
  const dsDapAn = ["A", "B", "C", "D"];

  const onPickCorrectAnswer = (e) => {
    setDapAn(e.target.value);
  };

  const onPickLevel = (e) => {
    setPhanLoai(e.target.value);
  };

  const onChangeHandler = (d, value) => {
    if (!typeof d === "object") {
      switch (d) {
        case "A":
          setCauA(value);
          break;
        case "B":
          setCauB(value);
          break;
        case "C":
          setCauC(value);
          break;
        case "D":
          setCauD(value);
        default:
          setPhanHoi(value);
      }
    }else if(d != null){
      setPhanHoi(value.substr(0,d.selectionStart) + )
    }
  };

  const dispatch = useDispatch();
  const questionCreate = useSelector((state) => state.questionCreate);
  const { loading, error, questionCreated } = questionCreate;

  const onSubmitHandler = (e, onHide) => {
    e.preventDefault();
    dispatch(
      createQuestion(
        maMH,
        phanHoi,
        cauA,
        cauB,
        cauC,
        cauD,
        dapAn,
        diem,
        phanLoai
      )
    );
    dispatch(listQuestion());
    onHide();
  };

  const onPickQuestionType = (e) => {
    setQuestionType(e.target.value);
  };

  useEffect(() => {
    console.log(questionCreated);
    if (questionCreated) {
      dispatch({ type: QUESTION_CREATE_RESET });
      setCauA("");
      setCauB("");
      setCauC("");
      setCauD("");
      setPhanHoi("");
      setDapAn("A");
      setDiem(0.25);
      setPhanLoai(0);
    }
  }, [dispatch, questionCreated]);

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="modal-sm modal-lg"
      className="add-question-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          id="add-question-form"
          onSubmit={(e) => onSubmitHandler(e, onHide)}
        >
          <QuestionsType
            dsDapAn={dsDapAn}
            type={questionType}
            setPhanHoi={onChangeHandler}
            onChangeHandler={onChangeHandler}
          />
          <Form.Group className="right-form parent-group">
            <Form.Group controlId="corect-answer first-child">
              <Form.Label>Chọn loại câu hỏi</Form.Label>
              <Form.Control as="select">
                <option onClick={(e) => onPickQuestionType(e)} value={0}>
                  Cơ bản
                </option>
                <option onClick={(e) => onPickQuestionType(e)} value={1}>
                  Điền vào chỗ trống
                </option>
              </Form.Control>
            </Form.Group>

            <div className="break" />

            <Form.Group controlId="corect-answer first-child">
              <Form.Label>Chọn đáp án đúng</Form.Label>
              <Form.Control as="select">
                <option onClick={(e) => onPickCorrectAnswer(e)}>A</option>
                <option onClick={(e) => onPickCorrectAnswer(e)}>B</option>
                <option onClick={(e) => onPickCorrectAnswer(e)}>C</option>
                <option onClick={(e) => onPickCorrectAnswer(e)}>D</option>
              </Form.Control>
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="point">
              <Form.Label>Thang Điểm</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập số điểm cho câu hỏi"
                onChange={(e) =>
                  isNaN(e.target.value)
                    ? console.log("Must be a number")
                    : setDiem(e.target.value)
                }
              />
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="corect-answer">
              <Form.Label>Phân loại độ khó</Form.Label>
              <Form.Control as="select">
                <option value={0} onClick={(e) => onPickLevel(e)}>
                  Dễ
                </option>
                <option value={1} onClick={(e) => onPickLevel(e)}>
                  Trung bình
                </option>
                <option value={2} onClick={(e) => onPickLevel(e)}>
                  Khó
                </option>
              </Form.Control>
            </Form.Group>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{ padding: "0.7rem 10rem" }}>
        <Button
          type="submit"
          className="btn btn-block"
          form="add-question-form"
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuestion;
