import React, {useState} from 'react'
import {Form} from "react-bootstrap";
import ZoomImage from "./ZoomImage";

const ImageAnswer = ({id,d, answer,addAnswer }) => {
    const [show, setShow] = useState(false);
    return (
    <div className="image-answer">
        <ZoomImage show={show} image={answer} handleClose={() => setShow(false)}/>
      <Form.Group
          id={id}
          controlId="add-answer-container"
          className="add-answer-container image-container mx-0 my-4"
          key={d}
      >
          <button className={"expand-image-btn"}
                  onClick={() => setShow(true)}>
              <i className="fas fa-expand-arrows-alt"/>
          </button>
        <div style={{height: "100%", padding: "0.6rem"}}>
          <Form.Label className="answer-label d-flex">
            <span>
                {d}
            </span>
          </Form.Label>
        </div>

        <Form.Control
            type="image"
            className="draggable image-input"
            key={d}
            onClick={(e) => addAnswer(d)}
            src={answer}
        />
      </Form.Group>
    </div>
  )
}

export default ImageAnswer

