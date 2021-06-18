import React from 'react'
import {Form} from "react-bootstrap"
import ImageAnswer from "./ImageAnswer";

const NormalAnswer = ({id, d, answer, addAnswer}) => {
  return (
    <>
      {
        answer.match(/[\/.](gif|jpg|jpeg|tiff|png)$/i)
          ?
          <ImageAnswer id={id} d={d} answer={answer} addAnswer={addAnswer} />
          :
          <div className="normal-answer">
            <Form.Group
              id={id}
              controlId="add-answer-container"
              className="add-answer-container mx-0 my-4"
              key={d}
            >
              <div style={{height: "100%", padding: "0.6rem"}}>
                <Form.Label className="answer-label d-flex">
                  <span>{d}</span>
                </Form.Label>
              </div>
              <Form.Control
                type="text"
                placeholder="Your answer here"
                className="draggable"
                key={d}
                value={
                  answer
                }
                onClick={(e) => addAnswer(d)}
              />
            </Form.Group>
          </div >
      }
    </>
  )
}

export default NormalAnswer

