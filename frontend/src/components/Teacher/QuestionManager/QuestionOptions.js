import React from 'react'
import {Form} from "react-bootstrap";

const QuestionOptions = ({setQuestionType,
                             setQuestionPoint,
                             setQuestionLevel,
                             dapAn,
                             dsDapAn,
                             setDapAn,
                             questiontype,questionPoint,questionLevel}) => {
  return (
        <Form.Group className={"right-form parent-group"}>
            <Form.Group controlId="corect-answer first-child">
            <Form.Label>Chọn loại câu hỏi</Form.Label>
                <Form.Control as="select" onChange={e => setQuestionType(parseInt(e.target.value))}>
                    <option value={0}>
                        Cơ bản
                    </option>
                    <option value={1}>
                        Điền vào chỗ trống
                    </option>
                </Form.Control>
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="corect-answer first-child">
                <Form.Label>Chọn đáp án đúng</Form.Label>
                <Form.Control as="select" onChange={e =>setDapAn(e.target.value)}>
                    {
                        dsDapAn.map(d=>
                            <option value={d} selected={d===dapAn}>{ d }</option>
                        )
                    }
                </Form.Control>
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="point">
                <Form.Label>Thang Điểm</Form.Label>
                <Form.Control
                    type="number"
                    placeholder="Nhập số điểm cho câu hỏi"
                    value = {questionPoint}
                    onChange={e => setQuestionPoint(e.target.value)}
                />
            </Form.Group>
            <div className="break" />
            <Form.Group controlId="corect-answer">
                <Form.Label>Phân loại độ khó</Form.Label>
                <Form.Control as="select"
                              onChange={(e)  => setQuestionLevel(e.target.value)}>
                    <option value={0}>
                        Dễ
                    </option>
                    <option value={1}>
                        Trung bình
                    </option>
                    <option value={2}>
                        Khó
                    </option>
                </Form.Control>
            </Form.Group>
        </Form.Group>
  )
}

export default QuestionOptions

