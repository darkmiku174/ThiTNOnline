import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Table} from "react-bootstrap";
import {createExamAction} from "../../../actions/ExamActions";

const AddExamQuestionList = ({handleClose}) => {

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [pages, setPages] = useState([]);
  const {loading, error, questions, CTMH} = useSelector(
    (state) => state.questionListBySubject
  );
  const {tempExam} = useSelector((state) => state.tempExam);

  const highlightCurrentPage = (e, index) => {
    setCurrentPage(index);
  };

  const createExam = (e) => {
    dispatch(createExamAction());
    handleClose()
    dispatch({type: "ADD_TEMP_EXAM", payload: {DSCH: []}})
  };

  const addQuestionToTempExam = (e, id) => {
    if (e.target.checked) {
      dispatch({
        type: "ADD_TEMP_EXAM",
        payload: {DSCH: [...tempExam.DSCH, id], CTMH: CTMH},
      });
    } else {
      const index = tempExam.DSCH.indexOf(id);
      tempExam.DSCH.splice(index, 1);
      dispatch({
        type: "ADD_TEMP_EXAM",
        payload: {DSCH: [...tempExam.DSCH], CTMH: CTMH},
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
            {pages[currentPage].map((q, index) => (
              <tr key={`tr-${currentPage}${index}`}>
                <td>
                  <Form.Check
                    id={q._id}
                    inline
                    onChange={(e) => addQuestionToTempExam(e, q._id)}
                    checked={tempExam.DSCH.includes(q._id)}
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
                className={`add-exam-table-pagination btn btn-sm mr-2 ${currentPage === index ? "btn-primary" : ""
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
