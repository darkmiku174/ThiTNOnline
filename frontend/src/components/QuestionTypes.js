import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";

const QuestionTypes = ({ dsDapAn, type, setPhanHoi, onChangeHandler }) => {
  const [selection, setSelection] = useState("");
  const sliceText = (e) => {
    if (e.target.selectionStart != e.target.selectionEnd) {
      setSelection(
        e.target.value.slice(e.target.selectionStart, e.target.selectionEnd)
      );
    }
  };

  console.log(selection);

  return type == 0 ? (
    <Form.Group className="left-form parent-group">
      <Form.Group className="question first-child">
        <Form.Label>Question</Form.Label>
        <Form.Control
          type="text"
          placeholder="Thêm câu hỏi"
          onChange={(e) => setPhanHoi("question", e.target.value)}
        />
      </Form.Group>
      {dsDapAn.map((dapAn) => (
        <Form.Group
          controlId="add-answer-container"
          className="add-answer-container"
        >
          <Form.Label className="answer-label">{dapAn}</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your answer here"
            className="draggable"
            key={dapAn}
            onChange={(e) => onChangeHandler(dapAn, e.target.value)}
          />
        </Form.Group>
      ))}
      )
    </Form.Group>
  ) : (
    <Form.Group className="left-form parent-group">
      <Form.Group className="question first-child">
        <Form.Group className="p-0 d-flex justify-content-between">
          <Form.Label>Question</Form.Label>
          <Button
            onClick={(e) => onChangeHandler("A", selection)}
            className="btn-sm btn-light btn-outline-primary"
          >
            Tạo đáp án
          </Button>
        </Form.Group>
        <Form.Control
          type="text"
          placeholder="Thêm câu hỏi"
          onChange={(e) => setPhanHoi("question", e.target.value)}
          onMouseUp={(e) => sliceText(e)}
        />
      </Form.Group>
    </Form.Group>
  );
};

export default QuestionTypes;
