import React, {useEffect, useState} from "react";
import {Button, Form} from "react-bootstrap";

const QuestionTypes = ({phanHoi, dsDapAn, type, onChangeHandler,
  sliceText, selectionRange, dapAn, cauA, cauB, cauC, cauD}) => {
  const [switcher, setSwitcher] = useState(0)
  const [localSelection, setLocalSelection] = useState({})

  const sendSeletion = (e) => {
    sliceText(localSelection, "");
    setSwitcher(1)
  }

  return type == 0 ? (
    <Form.Group className="left-form parent-group">
      <Form.Group className="question first-child">
        <Form.Label>Question</Form.Label>
        <Form.Control
          type="text"
          className="question-box"
          placeholder="Thêm câu hỏi"
          value={phanHoi}
          onChange={(e) => onChangeHandler("question", e.target.value)}
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
            readOnly={phanHoi === "" ? true : false}
            onChange={(e) => onChangeHandler(d, e.target.value)}
          />
        </Form.Group>
      ))
      }
    </Form.Group >
  ) : (
    <Form.Group className="left-form parent-group">
      <Form.Group className="question first-child">
        <Form.Group className="p-0 d-flex justify-content-between">
          <Form.Label>Question</Form.Label>
          <Button
            onClick={(e) => phanHoi ? sendSeletion(e) : ""}
            className="btn-sm btn-light btn-outline-primary"
            disabled={Object.keys(localSelection).length === 0 ? true : false}
          >
            Tạo đáp án
          </Button>
        </Form.Group>
        {switcher === 0 ?
          <Form.Control
            type="text"
            placeholder="Thêm câu hỏi"
            onMouseUp={(e) => setLocalSelection({selectionStart: e.target.selectionStart, selectionEnd: e.target.selectionEnd})}
            className="question-box"
            onChange={e => onChangeHandler("", e.target.value)}
            value={phanHoi}
            onBlur={e => phanHoi && Object.keys(selectionRange).length !== 0 ? setSwitcher(1) : ""}
            autoFocus
          /> :
          <div className="question-box custom"
            onClick={e => setSwitcher(0)}
          >
            {phanHoi.slice(0, selectionRange.selectionStart)}
            <span style={{border: "1px solid #BCBCBC", borderRadius: "0.2rem", padding: "0rem 0.2rem"}}>
              {phanHoi.slice(selectionRange.selectionStart, selectionRange.selectionEnd)}
            </span>
            {phanHoi.slice(selectionRange.selectionEnd, phanHoi.length)}
          </div>
        }
      </Form.Group>
      {
        dsDapAn.map((d) => (
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
              onChange={(e) => d !== dapAn
                ? onChangeHandler(d, e.target.value) : ""}
              value={d === "A" ? cauA : d === "B" ? cauB : d === "C" ? cauC : d === "D" ? cauD : ""}
              readOnly={Object.keys(selectionRange).length
                === 0 || d === dapAn ? true : false}
            />
          </Form.Group>
        ))
      }

    </Form.Group >
  );
};

export default QuestionTypes;
