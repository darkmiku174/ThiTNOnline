import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, InputGroup, Form, FormControl} from "react-bootstrap";
import NormalAnswer from "./NormalAnswer"
import ImageQuestion from "./ImageQuestion";

const Answer = ({exam}) => {
  const dispatch = useDispatch();
  const {questionIndex} = useSelector((state) => state.questionIndex);
  const question = exam[0].DSCH[questionIndex];
  const dsDapAn = ["A", "B", "C", "D"];
  const [dapAn, setDapAn] = useState("");
  const phanHoi = "";

  const addAnswer = (d) => {
    const correctElment = Array.from(document.getElementsByClassName("correct-answer"))
    if (correctElment.length > 0) {
      correctElment.map(c => c.classList.remove("correct-answer"))
    }
    const elment = document.getElementById(`normal-answer-${questionIndex}-${d}`)
    elment.classList.add("correct-answer")
    let submittion = JSON.parse(localStorage.getItem("submittion"));
    let founded = 0;
    if (submittion.DapAnSV.length === 0) {
      submittion.DapAnSV.push({CauHoi: question._id, DapAn: d});
    } else {
      submittion.DapAnSV.map((dapan, index) => {
        if (dapan.CauHoi === question._id) {
          dapan.DapAn = d;
          founded = 1;
        } else if (index === submittion.DapAnSV.length - 1 && founded === 0) {
          submittion.DapAnSV.push({CauHoi: question._id, DapAn: d});
        }
      });
    }
    localStorage.setItem("submittion", JSON.stringify(submittion));
  };

  useEffect(() => {
    const correctElment = Array.from(document.getElementsByClassName("correct-answer"))
    if (correctElment.length > 0) {
      correctElment.map(c => c.classList.remove("correct-answer"))
    }

  }, [question]);

  return (
    <>
      <Form.Group>
        {
          question.PhanHoi.match(/[\/.](gif|jpg|jpeg|tiff|png)$/i)
            ?
              <ImageQuestion question={question.PhanHoi}/>
              :
              <h2 className="question">{question.PhanHoi}</h2>
        }
        {dsDapAn.map((d) => (
          <NormalAnswer id={"normal-answer-" + questionIndex + "-" + d} d={d} answer={d === "A"
            ? question.CauA
            : d === "B"
              ? question.CauB
              : d === "C"
                ? question.CauC
                : d === "D"
                  ? question.CauD : ""} addAnswer={addAnswer} />
        ))}
      </Form.Group>
      <div className="options">
        <div>
          <Button
            variant="light"
            className="mr-3"
            onClick={(e) =>
              questionIndex > 0
                ? dispatch({
                  type: "CHANGE_QUESTION_INDEX",
                  payload: questionIndex - 1,
                })
                : ""
            }
          >
            Câu trước
          </Button>
          {""}
          <Button
            variant="primary"
            onClick={(e) =>
              questionIndex < exam[0].DSCH.length - 1
                ? dispatch({
                  type: "CHANGE_QUESTION_INDEX",
                  payload: questionIndex + 1,
                })
                : ""
            }
          >
            Tiếp theo
          </Button>
          {""}
        </div>
        <div className="d-flex flex-grow-1 justify-content-end">
          <Button variant="danger">Bỏ qua</Button>
        </div>
        {""}
      </div>
    </>
  );
};
export default Answer;

