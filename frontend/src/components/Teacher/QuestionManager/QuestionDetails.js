import React from 'react'
import {Table} from "react-bootstrap";

const QuestionDetails = ({questionDetails}) => {
  if(!questionDetails){
    return null
  }
  return (
    <div className={"admin-question-details"}>
      <Table striped bordered hover>
        <thead>
        <th>ID</th>
        <th>Phần hỏi</th>
        <th>Câu A</th>
        <th>Câu B</th>
        <th>Câu C</th>
        <th>Câu D</th>
        <th>Đáp án</th>
        <th>Phân loại</th>
        </thead>
        <tbody>
            <tr>
              <td>{questionDetails._id}</td>
              <td>{questionDetails.PhanHoi}</td>
              <td>{questionDetails.CauA}</td>
              <td>{questionDetails.CauB}</td>
              <td>{questionDetails.CauC}</td>
              <td>{questionDetails.CauD}</td>
              <td>{questionDetails.DapAn}</td>
              <td>
                {questionDetails.PhanLoai === 0
                    ? "Dễ"
                    : questionDetails.PhanLoai === 1
                        ? "Trung bình"
                        : questionDetails.PhanLoai === 2
                            ? "Khó"
                            : ""}
              </td>
            </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default QuestionDetails

