import React from 'react'
import {Form} from "react-bootstrap"

const FillInBlankAnswer = ({id,d,answer,addAnswer}) => {
  return (
    <div className={"fill-in-blank-answer"}>
      <Form.Group
          id={id}
          controlId={"fill-in-blank-answer"} className={"add-answer-container"} key={d}>

      </Form.Group>
    </div>
  )
}

export default FillInBlankAnswer

