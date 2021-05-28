import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, InputGroup, Form, FormControl } from "react-bootstrap";

const Answer = ({ exam }) => {
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { questionIndex } = useSelector((state) => state.questionIndex);
  const question = exam[0].DSCH[questionIndex];
  const dsDapAn = ["A", "B", "C", "D"];
  const [dapAn, setDapAn] = useState("");
  const phanHoi = "";

  console.log(questionIndex);
  const addAnswer = (d) => {
    setDapAn(d);
    let submittion = JSON.parse(localStorage.getItem("submittion"));
    let founded = 0;
    if (submittion.DapAnSV.length === 0) {
      submittion.DapAnSV.push({ CauHoi: question._id, DapAn: d });
    } else {
      submittion.DapAnSV.map((dapan, index) => {
        if (dapan.CauHoi === question._id) {
          dapan.DapAn = d;
          founded = 1;
        } else if (index === submittion.DapAnSV.length - 1 && founded === 0) {
          submittion.DapAnSV.push({ CauHoi: question._id, DapAn: d });
        }
      });
    }
    localStorage.setItem("submittion", JSON.stringify(submittion));
  };

  useEffect(() => {
    setDapAn("");
  }, [question]);

  return (
    <>
      <Form.Group>
        <h2 className="question">{question.PhanHoi}</h2>
        {dsDapAn.map((d) => (
          <Form.Group
            id={d}
            controlId="add-answer-container"
            className={
              d === dapAn
                ? "correct-answer add-answer-container mx-0 my-4"
                : "" + "add-answer-container mx-0 my-4"
            }
            key={d}
          >
            <div style={{ height: "100%", padding: "0.6rem" }}>
              <Form.Label className="answer-label d-flex">
                {d === dapAn ? "Key" : ""}
                <span>{d}</span>
              </Form.Label>
            </div>
            <Form.Control
              type="text"
              placeholder="Your answer here"
              className="draggable"
              key={d}
              value={
                d === "A"
                  ? question.CauA
                  : d === "B"
                  ? question.CauB
                  : d === "C"
                  ? question.CauC
                  : d === "D"
                  ? question.CauD
                  : ""
              }
              readOnly={phanHoi === "" ? true : false}
              onClick={(e) => addAnswer(d)}
            />
          </Form.Group>
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
