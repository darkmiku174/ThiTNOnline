import React, { useState } from "react";
import { Form } from "react-bootstrap";

const DragAndDrop = () => {
  const [dsDapAn, setDsDapAn] = useState(["A", "B", "C", "D"]);
  const [dragValue, setDragValue] = useState({});

  const dragStart = (e) => {
    e.target.classList.add("dragging");
    setDragValue(e);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("drag-item", e.target.value);
  };

  const dragEnter = (e) => {
    if (!e.target.classList.contains("dragging")) {
      e.target.classList.add("over");
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    return false;
  };

  const dragLeave = (e) => {
    e.stopPropagation();
    e.target.classList.remove("over");
  };

  const dragDrop = (e) => {
    if (!e.target.classList.contains("dragging")) {
      const holder = dragValue.target.value;
      dragValue.target.value = e.target.value;
      e.target.value = holder;
      setDragValue(e.target.value);
    }
  };

  const dragEnd = (e) => {
    e.target.classList.remove("dragging");
    console.log(e.target);
  };

  return (
    <Form>
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
            draggable
            onDragStart={dragStart}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          ></Form.Control>
        </Form.Group>
      ))}
    </Form>
  );
};

export default DragAndDrop;
