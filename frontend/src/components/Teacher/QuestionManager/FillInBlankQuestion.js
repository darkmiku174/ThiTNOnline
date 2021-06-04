import React, {useEffect, useRef, useState} from 'react'
import {Form} from "react-bootstrap"

const FillInBlankQuestion = ({}) => {
  const selection = useRef(null)
  return (
    <Form.Group>
      <Form.Label>Question</Form.Label>
      <Form.Control
        ref={selection}
        type={"text"}
        placeholder={"Thêm câu hỏi"}
        onSelect={e => console.log(e)}
      />
      <button onClick={() => console.log(selection.selectionStart)}>Click me</button>
    </Form.Group>
  )
}

export default FillInBlankQuestion

