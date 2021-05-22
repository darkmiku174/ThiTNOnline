import React, {useState, useEffect} from "react";
import {InputGroup, Form, FormControl} from "react-bootstrap";

const Answer = ({question}) => {
  const dsDapAn = ["A", "B", "C", "D"];
  const [dapAn, setDapAn] = useState("");
  const phanHoi = "";
  const onChangeHandler = () => {}

  useEffect(() => {
    setDapAn("")
  }, [question])

  return (
    < Form.Group >
      {
        dsDapAn.map((d) => (
          <Form.Group
            id={d}
            controlId="add-answer-container"
            className={d === dapAn ? "correct-answer add-answer-container mx-0 my-4" : "" + "add-answer-container mx-0 my-4"}
            key={d}
          >
            <div style={{height: "100%", padding: "0.6rem"}}>
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
              value={d === "A" ? question.CauA : d === "B" ? question.CauB : d === "C" ? question.CauC : d === "D" ? question.CauD : ""}
              readOnly={phanHoi === "" ? true : false}
              onChange={(e) => onChangeHandler(d, e.target.value)}
              onClick={e => setDapAn(d)}
            />
          </Form.Group>
        ))
      }
    </Form.Group>
  )
}
export default Answer;
