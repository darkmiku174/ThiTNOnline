import React from 'react'
import {Form} from "react-bootstrap"

const BasicQuestion = ({phanHoi,dapAn,dsDapAn, onChangeHandler}) => {
  return (
      <>
    <Form.Group className={"question first-child"}>
      <Form.Label>Question</Form.Label>
      <Form.Control
          type="text"
          className="question-box"
          placeholder="Thêm câu hỏi"
          value={phanHoi}
          onChange={(e) => onChangeHandler("phanHoi",e.target.value)}
      />

    </Form.Group>
    {dsDapAn.map((d) => (
        <Form.Group
            controlId="add-answer-container"
            className={d === dapAn ? "correct-answer add-answer-container" : "" + "add-answer-container"}
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
                value={phanHoi === "" ? "" : null}
                readOnly={phanHoi === ""}
                onChange={e=>onChangeHandler(d,e.target.value)}
            />
        </Form.Group>
    ))
    }
      </>
  )
}

export default BasicQuestion

