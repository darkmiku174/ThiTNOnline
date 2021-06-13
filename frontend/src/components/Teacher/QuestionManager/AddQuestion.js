import React, { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import {
  createQuestion,
  getQuestionListBySubjectAction,
} from "../../../actions/QuestionActions";
import { QUESTION_CREATE_RESET } from "../../../constants/QuestionConstants";
import { useSelector, useDispatch } from "react-redux";
import QuestionTypes from "./QuestionTypes";

const AddQuestion = ({ show, onHide, maMH }) => {
  const [phanHoi, setPhanHoi] = useState("");
  const [cauA, setCauA] = useState("");
  const [cauB, setCauB] = useState("");
  const [cauC, setCauC] = useState("");
  const [cauD, setCauD] = useState("");
  const [dapAn, setDapAn] = useState("A");
  const [diem, setDiem] = useState(Number(0));
  const [phanLoai, setPhanLoai] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [questionType, setQuestionType] = useState(0);
  const dsDapAn = ["A", "B", "C", "D"];
  const [selectionRange, setSelectionRange] = useState({});
  const [question, setQuestion] = useState({});

  {
    /*FUNCTIONS*/
  }
  const resetState = () => {
    setCauA("");
    setCauB("");
    setCauC("");
    setCauD("");
    setPhanHoi("");
    setDapAn("A");
    setDiem(Number(0));
    setPhanLoai(0);
    setSelectionRange(0);
    setStartIndex(0);
    setEndIndex(0);
  };

  const hide = () => {
    onHide();
    resetState();
  };

  {
    /*e:["A","B","C","D"]*/
  }
  const onPickCorrectAnswer = (e) => {
    switch (e.target.value) {
      case "A":
        onChangeHandler(dapAn, cauA);
        break;
      case "B":
        onChangeHandler(dapAn, cauB);
        break;
      case "C":
        onChangeHandler(dapAn, cauC);
        break;
      case "D":
        onChangeHandler(dapAn, cauD);
        break;
    }
    setDapAn(e.target.value);
    sliceText(selectionRange, e.target.value);
  };

  const onPickLevel = (e) => {
    setPhanLoai(e.target.value);
  };

  const onChangeHandler = (d, value) => {
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
        break;
      default:
        value === "" ? resetState() : setPhanHoi(value);
        break;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setQuestion({
      MonHoc: maMH,
      PhanHoi: phanHoi,
      CauA: cauA,
      CauB: cauB,
      CauC: cauC,
      CauD: cauD,
      DapAn: dapAn,
      ThangDiem: diem,
      PhanLoai: phanLoai,
      StartIndex: startIndex,
      EndIndex: endIndex,
    });
    dispatch({ type: QUESTION_CREATE_RESET });
  };

  const onPickQuestionType = (e) => {
    if (e.target.value != questionType) {
      resetState();
    }
    setQuestionType(e.target.value);
  };

  const sliceText = (e, d) => {
    if (e.selectionStart != e.selectionEnd) {
      setSelectionRange({
        selectionStart: e.selectionStart,
        selectionEnd: e.selectionEnd,
      });
      if (!d) {
        onChangeHandler(dapAn, phanHoi.slice(e.selectionStart, e.selectionEnd));
      } else {
        onChangeHandler(d, phanHoi.slice(e.selectionStart, e.selectionEnd));
      }
      setStartIndex(e.selectionStart);
      setEndIndex(e.selectionEnd);
    }
  };

  {
    /*DISPATCH*/
  }
  const dispatch = useDispatch();
  const questionCreate = useSelector((state) => state.questionCreate);
  const { loading, error, questionCreated } = questionCreate;

  useEffect(() => {
    if (Object.keys(question).length !== 0 && loading == null) {
      dispatch(createQuestion(question));
    } else if (
      Object.keys(question).length !== 0 &&
      Object.keys(questionCreated).length !== 0 &&
      loading == false
    ) {
      resetState();
      setQuestion({});
      dispatch(getQuestionListBySubjectAction(maMH));
    }
  }, [onSubmitHandler, questionCreated]);

  {
    /* RETURN */
  }
  return (
    <Modal
      show={show}
      onHide={hide}
      size="modal-sm modal-lg"
      className="add-question-modal"
      overflow="visible"
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Question</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="add-question-form" onSubmit={(e) => onSubmitHandler(e)}>
          <QuestionTypes
            phanHoi={phanHoi}
            dsDapAn={dsDapAn}
            type={questionType}
            setPhanHoi={onChangeHandler}
            onChangeHandler={onChangeHandler}
            sliceText={sliceText}
            selectionRange={selectionRange}
            dapAn={dapAn}
            cauA={cauA}
            cauB={cauB}
            cauC={cauC}
            cauD={cauD}
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
                value={diem ? diem : null}
                onChange={(e) =>
                  e.target.value === ""
                    ? setDiem(Number(0))
                    : setDiem(Number(e.target.value))
                }
              />
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="corect-answer">
              <Form.Label>Phân loại độ khó</Form.Label>
              <Form.Control as="select" defaultValue={cauA}>
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
          disabled={
            phanHoi === "" ||
            cauA === "" ||
            cauB === "" ||
            cauC === "" ||
            cauD === "" ||
            dapAn === "" ||
            diem === Number(0) ||
            Object.keys(question).length !== 0
          }
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddQuestion;
