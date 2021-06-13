import React, {useState} from 'react'
import {Button, Form} from "react-bootstrap"

const FillInBlankQuestion = ({phanHoi,dapAn, cauA,cauB,cauC,cauD,dsDapAn,onChangeHandler}) => {
    const [blur,setBlur]  = useState(true)
    const [selectionStart,setSelectionStart] = useState(0)
    const [selectionEnd,setSelectionEnd] = useState(0)
    const [selectionRange, setSelectionRange] =
        useState({selectionStart:0,selectionEnd:phanHoi.length});
    const [border,setBorder] = useState("")
    const getSelection=(e) =>{
        const { selectionStart } = e.target
        const { selectionEnd } = e.target
        setSelectionStart(selectionStart)
        setSelectionEnd(selectionEnd)
    }
    const createQuestion=()=>{
        setBorder("1px solid #BCBCBC")
        setSelectionRange({ selectionStart,selectionEnd })
        onChangeHandler("phanHoiTemp",phanHoi.slice(0,selectionStart) + "@@" + phanHoi.slice(selectionEnd,phanHoi.length))
        onChangeHandler(dapAn,phanHoi.slice(selectionStart,selectionEnd))
    }

  return (
      <>
      <Form.Group className={"question first-child"}>
          <Form.Group className="p-0 d-flex justify-content-between">
              <Form.Label
              >Question</Form.Label>
              <Button
                  className="btn-sm btn-light btn-outline-primary"
                  onClick={createQuestion}
              >
                  Tạo đáp án
              </Button>
          </Form.Group>
          {
              !blur ?
                  <Form.Control
                      type="text"
                      placeholder="Thêm câu hỏi"
                      className="question-box"
                      onChange={e => onChangeHandler("phanHoi", e.target.value)}
                      value={phanHoi}
                      onSelect={getSelection}
                      onBlur={() =>setBlur(true)}
                      autoFocus
                  />
                  :
                  <div className={"question-box custom"} onClick={() => setBlur(false)}>
                      {phanHoi.slice(0,selectionRange.selectionStart)}
                      <span
                          style={{border:border,
                              borderRadius:"0.2rem",
                              padding:"0 0.2rem"}}>
                          {phanHoi.slice(selectionRange.selectionStart,selectionRange.selectionEnd)}
                      </span>
                      {phanHoi.slice(selectionRange.selectionEnd,phanHoi.length)}
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
                    value={d === "A" ? cauA : d==="B" ? cauB : d==="C" ? cauC : d==="D" ? cauD:""}
                    onChange={(e) => d !== dapAn
                        ? onChangeHandler(d, e.target.value) : ""}
                />
            </Form.Group>
        ))
    }
      </>

  )
}

export default FillInBlankQuestion

