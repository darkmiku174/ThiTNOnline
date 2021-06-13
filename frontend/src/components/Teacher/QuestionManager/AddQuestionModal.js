import React, {useEffect, useState} from 'react'
import {Button, Form, Modal} from "react-bootstrap";
import {withRouter} from "react-router-dom"
import QuesitonTypev2 from "./QuesitonTypev2";
import QuestionOptions from "./QuestionOptions";
import {useDispatch, useSelector} from "react-redux";
import {createQuestion, getQuestionListBySubjectAction} from "../../../actions/QuestionActions";

const AddQuestionModal = ({show, handleClose, location}) => {
  const dispatch = useDispatch()
  const {hash} = location

  const {loading, error, questionCreated} = useSelector(state => state.questionCreate)

  const [phanHoi, setPhanHoi] = useState("")
  const [phanHoiTemp, setPhanHoiTemp] = useState("");
  const [dapAn, setDapAn] = useState("A")
  const [dsDapAn, setDsDapAn] = useState(["A", "B", "C", "D"])
  const [cauA, setCauA] = useState("")
  const [cauB, setCauB] = useState("")
  const [cauC, setCauC] = useState("")
  const [cauD, setCauD] = useState("")

  const [questionType, setQuestionType] = useState(0)
  const [questionPoint, setQuestionPoint] = useState(0)
  const [questionLevel, setQuestionLevel] = useState(0)

  const resetState = () => {
    setPhanHoi("")
    setPhanHoiTemp("")
    setDapAn("A")
    setCauA("")
    setCauB("")
    setCauC("")
    setCauD("")
    setQuestionPoint(0)
    setQuestionLevel(1)
  }

  const changeQuestionTypeHandler = (value) => {
    resetState()
    setQuestionType(value)
  }

  const changeQuestionPoint = (value) => {
    setQuestionPoint(parseFloat(value))
  }

  const changeQuestionLevel = (value) => {
    setQuestionLevel(parseInt(value))
  }

  // dapAn=C && value=B => onChangeHandler(B,cauC)
  // => A = B => setCauC=cauB
  const changeDapAn = (value) => {
    setDapAn(value)
    switch (dapAn) {
      case "A":
        onChangeHandler(value, cauA)
        break;
      case "B":
        onChangeHandler(value, cauB)
        break;
      case "C":
        onChangeHandler(value, cauC)
        break;
      case "D":
        onChangeHandler(value, cauD)
        break;
    }
    switch (value) {
      case "A":
        onChangeHandler(dapAn, cauA)
        break;
      case "B":
        onChangeHandler(dapAn, cauB)
        break;
      case "C":
        onChangeHandler(dapAn, cauC)
        break;
      case "D":
        onChangeHandler(dapAn, cauD)
        break;
    }
  }


  const onSubmitHandler = (e) => {
    e.preventDefault()
    if (questionType === 1) {
      dispatch(createQuestion({
        PhanHoi: phanHoiTemp,
        DapAn: dapAn,
        CauA: cauA,
        CauB: cauB,
        CauC: cauC,
        CauD: cauD,
        ThangDiem: questionPoint,
        PhanLoai: questionLevel,
        MonHoc: hash.split("/")[1]
      }))
      return;
    }
    dispatch(createQuestion({
      PhanHoi: phanHoi,
      DapAn: dapAn,
      CauA: cauA,
      CauB: cauB,
      CauC: cauC,
      CauD: cauD,
      ThangDiem: questionPoint,
      PhanLoai: questionLevel,
      MonHoc: hash.split("/")[1]
    }))
  }

  useEffect(() => {
    dispatch(getQuestionListBySubjectAction(hash.split("/")[1]));
  }, [questionCreated]);


  const onChangeHandler = (type, value) => {
    switch (type) {
      case "phanHoi":
        setPhanHoi(value)
        break;
      case "A":
        setCauA(value)
        break
      case "B":
        setCauB(value)
        break
      case "C":
        setCauC(value)
        break
      case "phanHoiTemp":
        setPhanHoiTemp(value)
        break;
      default:
        setCauD(value)
        break
    }
  }
  return (
    <Modal show={show}
      onHide={handleClose}
      size={"modal-sm modal-lg"}
      className={"add-question-modal"}
      overflow={"visible"}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm câu hỏi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id={"add-question-form"}
          onSubmit={(e) => onSubmitHandler(e)}>
          <QuesitonTypev2 questionType={questionType}
            phanHoi={phanHoi}
            dapAn={dapAn}
            cauA={cauA}
            cauB={cauB}
            cauC={cauC}
            cauD={cauD}
            dsDapAn={dsDapAn}
            onChangeHandler={onChangeHandler} />
          <QuestionOptions setQuestionType={changeQuestionTypeHandler}
            setQuestionPoint={changeQuestionPoint}
            setQuestionLevel={changeQuestionLevel}
            setDapAn={changeDapAn}
            dapAn={dapAn}
            dsDapAn={dsDapAn}
            questiontype={questionType}
            questionPoint={questionPoint}
            questionLevel={questionLevel} />
        </Form>
        <Modal.Footer style={{marginTop: "0.6rem", padding: "0.3rem 10rem"}}>
          <Button form={"add-question-form"}
            type={"submit"}
            className={"btn btn-primary btn-block"}
            disabled={
              (phanHoi === "" && phanHoiTemp === "") ||
              cauA === "" ||
              cauB === "" ||
              cauC === "" ||
              cauD === "" ||
              dapAn === "" ||
              questionPoint === Number(0)
            }>Thêm</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

export default withRouter(AddQuestionModal)

