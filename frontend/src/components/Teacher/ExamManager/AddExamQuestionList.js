import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Table } from "react-bootstrap";
import { createExamAction } from "../../../actions/ExamActions";

const AddExamQuestionList = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const { loading, error, questions } = useSelector(
    (state) => state.questionListBySubject
  );
  const { tempExam } = useSelector((state) => state.tempExam);

  const highlightCurrentPage = (e, index) => {
    setCurrentPage(index);
  };

  const createExam = (e) => {
    dispatch(createExamAction());
  };

  const addQuestionToTempExam = (e, id) => {
    console.log(e.target.checked);
    if (e.target.checked) {
      dispatch({
        type: "ADD_TEMP_EXAM",
        payload: { DSCH: [...tempExam.DSCH, id] },
      });
    } else {
      console.log(tempExam.DSCH);
      const index = tempExam.DSCH.indexOf(id);
      tempExam.DSCH.splice(index, 1);
      dispatch({
        type: "ADD_TEMP_EXAM",
        payload: { DSCH: [...tempExam.DSCH] },
      });
    }
  };

  let temp = [];
  useEffect(() => {
    if (questions != null && questions.length > 0) {
      let endIndex = 10;
      for (let i = 0; i < questions.length; i++) {
        temp.push(questions.slice(i, endIndex));
        i = endIndex;
        endIndex = i + 11;
      }
      setPages(temp);
    }
  }, [questions]);

  {
    /*if questions is undefined or null so we don't need to do anything else, just return to stop wasted rendering*/
  }
  if (questions == null || pages.length === 0) {
    return null;
  }

  return (
    <>
      <div className="add-exam-question-list">
        <Table striped bordered hover>
          <thead>
            <th />
            <th>ID</th>
            <th>Phần hỏi</th>
            <th>Phân loại</th>
          </thead>
          <tbody>
            {pages[currentPage].map((q) => (
              <tr>
                <td>
                  <Form.Check
                    inline
                    onChange={(e) => addQuestionToTempExam(e, q._id)}
                  />
                </td>
                <td>{q._id}</td>
                <td>{q.PhanHoi}</td>
                <td>
                  {q.PhanLoai === 0
                    ? "Dễ"
                    : q.PhanLoai === 1
                    ? "Trung bình"
                    : q.PhanLoai === 2
                    ? "Khó"
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className={"d-flex justify-content-between"}>
          <div>
            {pages.map((q, index) => (
              <button
                onClick={(e) => highlightCurrentPage(e, index)}
                className={`add-exam-table-pagination btn btn-sm mr-2 ${
                  currentPage === index ? "btn-primary" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <Button className={"ml-4 mb-4"} onClick={(e) => createExam(e)}>
            Tạo đề thi
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddExamQuestionList;
